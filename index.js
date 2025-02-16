#!/usr/bin/env node
'use strict';
import axios from 'axios';
import { consume } from '@ii887522/hydro';
import axiosRetry, { exponentialDelay } from 'axios-retry';
import publicIp from 'public-ip';
import constants from './src/constants.js';
axiosRetry(axios, { retries: 16, retryDelay: exponentialDelay, retryCondition: error => error.response === undefined || (error.response.status >= 400 && error.response.status < 600) });
let updateRecords = async function updateRecords(zone, ipv6Address) {
    for (const record of (await axios.get(`${constants.dynv6ApiEndpoint}/zones/${zone.id}/records`, { headers: { Authorization: `Bearer ${process.argv[constants.httpTokenIndex] ?? ''}` } })).data) {
        consume(axios.patch(`${constants.dynv6ApiEndpoint}/zones/${zone.id}/records/${record.id}`, { data: ipv6Address }, { headers: { Authorization: `Bearer ${process.argv[constants.httpTokenIndex] ?? ''}` } }).then(response => console.log(`${new Date().toLocaleTimeString()}: ${response.data.name}${response.data.name === '' ? '' : '.'}${zone.name} address updated`)));
    }
};
let updateZone = function updateZone(zone, ipv6Address) {
    consume(axios.patch(`${constants.dynv6ApiEndpoint}/zones/${zone.id}`, { ipv6prefix: ipv6Address }, { headers: { Authorization: `Bearer ${process.argv[constants.httpTokenIndex] ?? ''}` } }));
    consume(updateRecords(zone, ipv6Address));
};
let recordedIpv6Address;
let update = async function update() {
    let currentIpv6Address = await publicIp.v6();
    if (recordedIpv6Address !== currentIpv6Address) {
        for (const zone of (await axios.get(`${constants.dynv6ApiEndpoint}/zones`, { headers: { Authorization: `Bearer ${process.argv[constants.httpTokenIndex] ?? ''}` } })).data) {
            updateZone(zone, currentIpv6Address);
        }
        recordedIpv6Address = currentIpv6Address;
    }
};
if (process.argv.length !== constants.requiredCommandLineArgCount)
    throw new Error('There must be exactly 1 command line argument passed in! Please try again.');
consume(update());
setInterval(() => consume(update()), 300000);
