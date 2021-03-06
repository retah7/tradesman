import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {RestClient} from '../common/rest.client';
import {config} from '../../config';
import {MostActiveCallsResponse} from '../schedular/most-active-calls-response';
import Store from '../store/store';

const data = [
  {
    "data": [
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "20,000",
        "noOfContractsTraded": "3,70,135",
        "contractValueRsLakhs": "15,06,496.83",
        "contractValuePremRsLakhs": "25,956.83",
        "lastTradedPrice": "232.00",
        "impliedValue": "48.31",
        "openInterest": "3,60,720",
        "valueOfUnderlying": "19,352.90",
        "timestamp": "08MAY2020",
        "perChange": "    -35.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "20,500",
        "noOfContractsTraded": "3,63,249",
        "contractValueRsLakhs": "15,03,929.32",
        "contractValuePremRsLakhs": "14,608.42",
        "lastTradedPrice": "127.05",
        "impliedValue": "48.75",
        "openInterest": "3,40,440",
        "valueOfUnderlying": "19,352.90",
        "timestamp": "08MAY2020",
        "perChange": "    -40.31"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "21,000",
        "noOfContractsTraded": "3,53,288",
        "contractValueRsLakhs": "14,91,444.15",
        "contractValuePremRsLakhs": "7,634.55",
        "lastTradedPrice": "64.00",
        "impliedValue": "49.26",
        "openInterest": "4,17,140",
        "valueOfUnderlying": "19,352.90",
        "timestamp": "08MAY2020",
        "perChange": "    -48.22"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "9,500",
        "noOfContractsTraded": "2,78,869",
        "contractValueRsLakhs": "20,01,937.81",
        "contractValuePremRsLakhs": "14,996.18",
        "lastTradedPrice": "51.60",
        "impliedValue": "31.46",
        "openInterest": "17,17,350",
        "valueOfUnderlying": "9,251.50",
        "timestamp": "08MAY2020",
        "perChange": "    -27.27"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "9,400",
        "noOfContractsTraded": "2,06,799",
        "contractValueRsLakhs": "14,74,457.22",
        "contractValuePremRsLakhs": "16,524.27",
        "lastTradedPrice": "80.00",
        "impliedValue": "31.76",
        "openInterest": "10,86,450",
        "valueOfUnderlying": "9,251.50",
        "timestamp": "08MAY2020",
        "perChange": "    -20.60"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "21,500",
        "noOfContractsTraded": "2,06,183",
        "contractValueRsLakhs": "8,88,829.35",
        "contractValuePremRsLakhs": "2,242.45",
        "lastTradedPrice": "33.00",
        "impliedValue": "50.33",
        "openInterest": "3,39,160",
        "valueOfUnderlying": "19,352.90",
        "timestamp": "08MAY2020",
        "perChange": "    -51.58"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "22,000",
        "noOfContractsTraded": "1,87,169",
        "contractValueRsLakhs": "8,24,617.20",
        "contractValuePremRsLakhs": "1,073.60",
        "lastTradedPrice": "17.00",
        "impliedValue": "51.68",
        "openInterest": "3,46,540",
        "valueOfUnderlying": "19,352.90",
        "timestamp": "08MAY2020",
        "perChange": "    -53.93"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "9,300",
        "noOfContractsTraded": "1,71,396",
        "contractValueRsLakhs": "12,14,604.61",
        "contractValuePremRsLakhs": "19,117.51",
        "lastTradedPrice": "120.65",
        "impliedValue": "31.51",
        "openInterest": "7,37,625",
        "valueOfUnderlying": "9,251.50",
        "timestamp": "08MAY2020",
        "perChange": "    -12.76"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "9,600",
        "noOfContractsTraded": "1,52,156",
        "contractValueRsLakhs": "11,00,724.65",
        "contractValuePremRsLakhs": "5,201.45",
        "lastTradedPrice": "31.30",
        "impliedValue": "31.14",
        "openInterest": "5,95,800",
        "valueOfUnderlying": "9,251.50",
        "timestamp": "08MAY2020",
        "perChange": "    -35.40"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "14MAY2020",
        "optionType": "CE",
        "strikePrice": "9,700",
        "noOfContractsTraded": "1,24,380",
        "contractValueRsLakhs": "9,07,426.11",
        "contractValuePremRsLakhs": "2,561.61",
        "lastTradedPrice": "19.00",
        "impliedValue": "31.06",
        "openInterest": "7,59,525",
        "valueOfUnderlying": "9,251.50",
        "timestamp": "08MAY2020",
        "perChange": "    -40.25"
      }
    ],
    "time": "May 07, 2020 15:30:30"
  },
  {
    "data": [
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,000",
        "noOfContractsTraded": "8,36,667",
        "contractValueRsLakhs": "33,53,291.06",
        "contractValuePremRsLakhs": "6,623.06",
        "lastTradedPrice": "18.00",
        "impliedValue": "0.00",
        "openInterest": "16,90,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -88.11"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "21,000",
        "noOfContractsTraded": "5,08,167",
        "contractValueRsLakhs": "21,34,426.41",
        "contractValuePremRsLakhs": "125.01",
        "lastTradedPrice": "0.95",
        "impliedValue": "0.00",
        "openInterest": "11,94,020",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -94.57"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,300",
        "noOfContractsTraded": "4,33,517",
        "contractValueRsLakhs": "30,30,550.44",
        "contractValuePremRsLakhs": "6,769.37",
        "lastTradedPrice": "13.90",
        "impliedValue": "0.00",
        "openInterest": "37,29,150",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -79.97"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,500",
        "noOfContractsTraded": "3,66,092",
        "contractValueRsLakhs": "15,01,390.15",
        "contractValuePremRsLakhs": "412.95",
        "lastTradedPrice": "1.75",
        "impliedValue": "0.00",
        "openInterest": "12,86,480",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -96.58"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,500",
        "noOfContractsTraded": "3,64,600",
        "contractValueRsLakhs": "14,36,862.35",
        "contractValuePremRsLakhs": "14,922.35",
        "lastTradedPrice": "152.50",
        "impliedValue": "0.00",
        "openInterest": "4,57,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -59.59"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,800",
        "noOfContractsTraded": "3,59,873",
        "contractValueRsLakhs": "14,31,320.00",
        "contractValuePremRsLakhs": "6,222.92",
        "lastTradedPrice": "49.30",
        "impliedValue": "0.00",
        "openInterest": "4,61,280",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -78.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,200",
        "noOfContractsTraded": "3,32,454",
        "contractValueRsLakhs": "13,44,099.55",
        "contractValuePremRsLakhs": "985.39",
        "lastTradedPrice": "4.50",
        "impliedValue": "0.00",
        "openInterest": "6,75,360",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -95.46"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,100",
        "noOfContractsTraded": "2,93,323",
        "contractValueRsLakhs": "11,80,555.85",
        "contractValuePremRsLakhs": "1,397.39",
        "lastTradedPrice": "9.05",
        "impliedValue": "0.00",
        "openInterest": "4,96,080",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -92.64"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,700",
        "noOfContractsTraded": "2,86,505",
        "contractValueRsLakhs": "11,35,650.24",
        "contractValuePremRsLakhs": "6,820.54",
        "lastTradedPrice": "75.90",
        "impliedValue": "0.00",
        "openInterest": "3,70,980",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -72.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,400",
        "noOfContractsTraded": "2,75,676",
        "contractValueRsLakhs": "19,44,559.92",
        "contractValuePremRsLakhs": "1,044.12",
        "lastTradedPrice": "2.10",
        "impliedValue": "0.00",
        "openInterest": "34,57,800",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -94.00"
      }
    ],
    "time": "May 07, 2020 11:03:22"
  },
  {
    "data": [
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,000",
        "noOfContractsTraded": "8,36,667",
        "contractValueRsLakhs": "33,53,291.06",
        "contractValuePremRsLakhs": "6,623.06",
        "lastTradedPrice": "18.00",
        "impliedValue": "0.00",
        "openInterest": "16,90,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -88.11"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "21,000",
        "noOfContractsTraded": "5,08,167",
        "contractValueRsLakhs": "21,34,426.41",
        "contractValuePremRsLakhs": "125.01",
        "lastTradedPrice": "0.95",
        "impliedValue": "0.00",
        "openInterest": "11,94,020",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -94.57"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,300",
        "noOfContractsTraded": "4,33,517",
        "contractValueRsLakhs": "30,30,550.44",
        "contractValuePremRsLakhs": "6,769.37",
        "lastTradedPrice": "13.90",
        "impliedValue": "0.00",
        "openInterest": "37,29,150",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -79.97"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,500",
        "noOfContractsTraded": "3,66,092",
        "contractValueRsLakhs": "15,01,390.15",
        "contractValuePremRsLakhs": "412.95",
        "lastTradedPrice": "1.75",
        "impliedValue": "0.00",
        "openInterest": "12,86,480",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -96.58"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,500",
        "noOfContractsTraded": "3,64,600",
        "contractValueRsLakhs": "14,36,862.35",
        "contractValuePremRsLakhs": "14,922.35",
        "lastTradedPrice": "152.50",
        "impliedValue": "0.00",
        "openInterest": "4,57,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -59.59"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,800",
        "noOfContractsTraded": "3,59,873",
        "contractValueRsLakhs": "14,31,320.00",
        "contractValuePremRsLakhs": "6,222.92",
        "lastTradedPrice": "49.30",
        "impliedValue": "0.00",
        "openInterest": "4,61,280",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -78.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,200",
        "noOfContractsTraded": "3,32,454",
        "contractValueRsLakhs": "13,44,099.55",
        "contractValuePremRsLakhs": "985.39",
        "lastTradedPrice": "4.50",
        "impliedValue": "0.00",
        "openInterest": "6,75,360",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -95.46"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,100",
        "noOfContractsTraded": "2,93,323",
        "contractValueRsLakhs": "11,80,555.85",
        "contractValuePremRsLakhs": "1,397.39",
        "lastTradedPrice": "9.05",
        "impliedValue": "0.00",
        "openInterest": "4,96,080",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -92.64"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,700",
        "noOfContractsTraded": "2,86,505",
        "contractValueRsLakhs": "11,35,650.24",
        "contractValuePremRsLakhs": "6,820.54",
        "lastTradedPrice": "75.90",
        "impliedValue": "0.00",
        "openInterest": "3,70,980",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -72.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,400",
        "noOfContractsTraded": "2,75,676",
        "contractValueRsLakhs": "19,44,559.92",
        "contractValuePremRsLakhs": "1,044.12",
        "lastTradedPrice": "2.10",
        "impliedValue": "0.00",
        "openInterest": "34,57,800",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -94.00"
      }
    ],
    "time": "May 07, 2020 11:03:22"
  },
  {
    "data": [
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,300",
        "noOfContractsTraded": "10,36,667",
        "contractValueRsLakhs": "33,53,291.06",
        "contractValuePremRsLakhs": "6,623.06",
        "lastTradedPrice": "18.00",
        "impliedValue": "0.00",
        "openInterest": "16,90,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -88.11"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "21,000",
        "noOfContractsTraded": "5,08,167",
        "contractValueRsLakhs": "21,34,426.41",
        "contractValuePremRsLakhs": "125.01",
        "lastTradedPrice": "0.95",
        "impliedValue": "0.00",
        "openInterest": "11,94,020",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -94.57"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,300",
        "noOfContractsTraded": "4,33,517",
        "contractValueRsLakhs": "30,30,550.44",
        "contractValuePremRsLakhs": "6,769.37",
        "lastTradedPrice": "13.90",
        "impliedValue": "0.00",
        "openInterest": "37,29,150",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -79.97"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,500",
        "noOfContractsTraded": "3,66,092",
        "contractValueRsLakhs": "15,01,390.15",
        "contractValuePremRsLakhs": "412.95",
        "lastTradedPrice": "1.75",
        "impliedValue": "0.00",
        "openInterest": "12,86,480",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -96.58"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,500",
        "noOfContractsTraded": "3,64,600",
        "contractValueRsLakhs": "14,36,862.35",
        "contractValuePremRsLakhs": "14,922.35",
        "lastTradedPrice": "152.50",
        "impliedValue": "0.00",
        "openInterest": "4,57,720",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -59.59"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,800",
        "noOfContractsTraded": "3,59,873",
        "contractValueRsLakhs": "14,31,320.00",
        "contractValuePremRsLakhs": "6,222.92",
        "lastTradedPrice": "49.30",
        "impliedValue": "0.00",
        "openInterest": "4,61,280",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -78.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,200",
        "noOfContractsTraded": "3,32,454",
        "contractValueRsLakhs": "13,44,099.55",
        "contractValuePremRsLakhs": "985.39",
        "lastTradedPrice": "4.50",
        "impliedValue": "0.00",
        "openInterest": "6,75,360",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -95.46"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "20,100",
        "noOfContractsTraded": "2,93,323",
        "contractValueRsLakhs": "11,80,555.85",
        "contractValuePremRsLakhs": "1,397.39",
        "lastTradedPrice": "9.05",
        "impliedValue": "0.00",
        "openInterest": "4,96,080",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -92.64"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "BANKNIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "19,700",
        "noOfContractsTraded": "2,86,505",
        "contractValueRsLakhs": "11,35,650.24",
        "contractValuePremRsLakhs": "6,820.54",
        "lastTradedPrice": "75.90",
        "impliedValue": "0.00",
        "openInterest": "3,70,980",
        "valueOfUnderlying": "19,516.65",
        "timestamp": "07MAY2020",
        "perChange": "    -72.47"
      },
      {
        "instrumentType": "OPTIDX",
        "symbol": "NIFTY",
        "expiryDate": "07MAY2020",
        "optionType": "CE",
        "strikePrice": "9,400",
        "noOfContractsTraded": "2,75,676",
        "contractValueRsLakhs": "19,44,559.92",
        "contractValuePremRsLakhs": "1,044.12",
        "lastTradedPrice": "2.10",
        "impliedValue": "0.00",
        "openInterest": "34,57,800",
        "valueOfUnderlying": "9,216.00",
        "timestamp": "07MAY2020",
        "perChange": "    -94.00"
      }
    ],
    "time": "May 07, 2020 12:09:42"
  }
]


@Injectable({
  providedIn: 'root'
})
export class ActiveCallsPutsService {

  private activeCallsSource = new BehaviorSubject(null);
  public activeCallsPuts$ = this.activeCallsSource.asObservable();

  constructor( private http: RestClient ) {

  }

  changeLease() {
    const activeCalls = Store.getIndexData('activeCalls', []);
    this.activeCallsSource.next(activeCalls);
  }


  public loadCalls(): Observable<any> {
    console.log("Inside service")
    return Observable.create((observer: Observer<any>) => {
      // const index = (Math.floor(Math.random() * 4) + 1) -1;
      // console.log('index', index);

      this.http.get(config.MOST_ACTIVE_CALLS).subscribe(response => {
        const transformedResponse = new MostActiveCallsResponse(response);
        observer.next(transformedResponse);
        observer.complete();
        this.changeLease();
      }, (err) => {
        observer.error(err);

      });
    });
  }
}
