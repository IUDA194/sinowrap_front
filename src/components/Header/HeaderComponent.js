import React from 'react';
import {useDispatch} from "react-redux";

import {flowerAction} from "../../redux";
import {BurgerMenuComponent, BasketSideComponent} from "../index";

import css from './header.module.css'
import {useNavigate} from "react-router-dom";


const HeaderComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header className={css.header}>
            <div className={css.bg}>
                <div className={css.first_bg}></div>
                <div className={css.second_bg}></div>
            </div>

            <div className={css.menu} onClick={() => dispatch(flowerAction.open_menu())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                    <line x1="3.5" y1="12.5" x2="28.5" y2="12.5" stroke="#1F1F1F" stroke-width="3"
                          stroke-linecap="round"/>
                    <line x1="3.5" y1="3.5" x2="28.5" y2="3.5" stroke="#1F1F1F" stroke-width="3"
                          stroke-linecap="round"/>
                    <line x1="3.5" y1="21.5" x2="28.5" y2="21.5" stroke="#1F1F1F" stroke-width="3"
                          stroke-linecap="round"/>
                </svg>
            </div>

            <BurgerMenuComponent/>
            <BasketSideComponent/>

            <div className={css.text} onClick={() => navigate('/home')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="240" height="64" viewBox="0 0 240 64" fill="none">
                    <path
                        d="M16.5323 46.1967H16.2777C13.8591 46.165 11.2443 45.6471 8.4332 44.6431C6.00401 43.7341 4.00444 42.8252 2.43449 41.9163C0.875144 41.0073 0.0636468 40.5106 0 40.4261C0.265195 40.0984 1.61239 38.3757 4.04157 35.2579H4.02566L5.69639 33.1177L5.85551 33.2286L5.80777 33.292C5.77595 33.3343 5.74412 33.403 5.7123 33.4981C5.68048 33.5933 5.66457 33.7201 5.66457 33.8786C5.66457 34.6607 6.16313 35.7018 7.16027 37.0017C8.79387 39.0521 10.5548 40.7907 12.4429 42.2175C14.8827 44.067 17.243 44.9918 19.5237 44.9918C20.0434 44.9918 20.5685 44.939 21.0989 44.8333C22.0536 44.5162 22.9765 44.067 23.8676 43.4858C25.6921 42.2703 26.6097 40.8382 26.6203 39.1895C26.6203 36.7586 24.7003 33.7994 20.8602 30.3116C19.163 28.8108 17.3809 27.384 15.5139 26.0312C13.6575 24.6784 11.955 23.4788 10.4063 22.4325L8.67188 21.2435C3.59074 17.6818 0.922879 14.1518 0.668291 10.6535L0.65238 10.1779C0.65238 7.63075 1.96775 5.15763 4.59848 2.75848C6.62457 0.919495 9.46746 0 13.1272 0C15.1002 0 17.2854 0.269507 19.6828 0.808521C22.3029 1.44266 24.4934 2.11378 26.2543 2.8219C28.0258 3.51945 31.2154 5.14177 31.3002 5.21575C30.7858 6.41351 29.009 10.1461 29.009 10.1461L26.1429 10.7961L25.9679 10.7169L25.8883 10.3522C25.8353 10.0986 25.7027 9.77095 25.4905 9.36933C25.289 8.95715 24.9602 8.50797 24.504 8.0218C24.0585 7.52506 23.4485 7.02304 22.6742 6.51573C21.4225 5.7442 20.0328 4.97267 18.5053 4.20114C16.9884 3.42961 15.4343 2.77962 13.8432 2.25118C12.2626 1.71216 10.7828 1.44266 9.40381 1.44266C8.65066 1.44266 7.94524 1.54306 7.28756 1.74387C6.54501 2.08207 5.86081 2.51011 5.23495 3.02799C4.84246 3.57757 4.64622 4.30683 4.64622 5.21575C4.64622 5.75477 4.7576 6.39419 4.98036 7.13401C5.47893 8.78276 6.70943 10.6429 8.67188 12.7144C10.995 15.1452 14.4001 17.7822 18.8872 20.6252C21.5179 22.274 23.6554 23.8382 25.2996 25.3178H25.3155C29.0707 28.6893 30.9483 31.9128 30.9483 34.9884C30.9483 36.077 30.7414 37.0704 30.3277 37.9688C29.9246 38.8671 29.4154 39.6704 28.8002 40.3785C28.1955 41.076 27.5697 41.6732 26.9226 42.1699C26.5619 42.4764 26.1535 42.7829 25.6974 43.0894C25.2519 43.3854 24.8594 43.6337 24.5199 43.8345L23.9948 44.1516C21.8521 45.515 19.3645 46.1967 16.5323 46.1967Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M42.0597 45.9747H31.383V45.7845L31.5898 45.7369C31.7277 45.6947 31.8974 45.6048 32.099 45.4674C32.3005 45.33 32.5074 45.1187 32.7195 44.8333C32.9317 44.5479 33.1173 44.1622 33.2765 43.676C33.4356 43.1793 33.5416 42.561 33.5947 41.8212V25.9361C33.5947 25.2385 33.5629 24.6361 33.4992 24.1288C33.4462 23.6109 33.3719 23.1776 33.2765 22.8288C33.181 22.4695 33.0749 22.1788 32.9582 21.9569C32.8415 21.7244 32.7248 21.5447 32.6082 21.4179C32.4915 21.2911 32.3854 21.2012 32.2899 21.1484C32.1945 21.085 32.1149 21.048 32.0513 21.0374L31.9717 21.0216V20.752C32.5551 20.752 33.0961 20.7362 33.5947 20.7045C34.6767 20.6305 35.589 20.5037 36.3315 20.324C37.074 20.1338 37.6734 19.9224 38.1295 19.6899C38.5963 19.4574 38.9516 19.2354 39.1956 19.024C39.4502 18.8021 39.6199 18.6171 39.7048 18.4692L39.848 18.2472V41.8053C39.901 42.5557 40.0071 43.174 40.1662 43.6601C40.3253 44.1463 40.511 44.5374 40.7231 44.8333C40.9353 45.1187 41.1421 45.33 41.3437 45.4674C41.5452 45.6048 41.715 45.6947 41.8529 45.7369L42.0597 45.7845V45.9747ZM36.1374 18.2472C36.1374 18.2472 35.9032 15.8223 35.119 14.9656C34.2481 14.0141 32.064 13.6973 32.064 13.6973C32.064 13.6973 34.2505 13.8175 35.119 12.9522C35.6282 12.4449 36.1374 6.595 36.1374 6.595C36.1374 6.595 36.6466 12.4449 37.1557 12.9522C38.0243 13.8175 40.2108 13.6973 40.2108 13.6973C40.2108 13.6973 38.0267 14.0141 37.1557 14.9656C36.3716 15.8223 36.1374 18.2472 36.1374 18.2472Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M52.6779 46.054H42.0171V45.8638L42.2239 45.8003C42.3512 45.7686 42.5156 45.6841 42.7172 45.5467C42.9293 45.4093 43.1415 45.1979 43.3536 44.9126C43.5658 44.6272 43.7514 44.2414 43.9106 43.7553C44.0697 43.2585 44.1758 42.6402 44.2288 41.9004V22.9715C44.2288 22.274 44.197 21.6715 44.1333 21.1642C44.0803 20.6464 44.006 20.213 43.9106 19.8643C43.8151 19.5049 43.709 19.2143 43.5923 18.9923C43.4756 18.7598 43.359 18.5801 43.2423 18.4533C43.1256 18.3265 43.0195 18.2366 42.924 18.1838C42.8286 18.1204 42.7543 18.0834 42.7013 18.0728L42.6058 18.057V17.7875C44.9615 17.7875 47.9405 17.6962 49.8297 16.0595C50.0737 15.8375 50.2434 15.6525 50.3389 15.5046L50.4662 15.2826V22.4801C50.7844 22.1736 51.1133 21.8829 51.4527 21.6081C54.1683 19.4415 57.1279 18.3582 60.3314 18.3582H60.4746C62.1613 18.4216 63.7365 18.7651 65.2004 19.3887C67.0568 20.2025 68.526 21.439 69.608 23.0983C70.69 24.7577 71.2309 26.5808 71.2309 28.5677V41.8687C71.284 42.6085 71.3901 43.2268 71.5492 43.7236C71.7189 44.2097 71.9098 44.5955 72.122 44.8809C72.3342 45.1662 72.541 45.3776 72.7426 45.515C72.9441 45.6524 73.1138 45.7369 73.2517 45.7686L73.4427 45.8321V46.0223H62.7818V45.8321L62.9887 45.7686C63.116 45.7369 63.2804 45.6524 63.482 45.515C63.6835 45.3776 63.8904 45.1662 64.1025 44.8809C64.3147 44.5955 64.5003 44.2097 64.6594 43.7236C64.8291 43.2268 64.9405 42.6085 64.9936 41.8687V26.3324C64.983 25.73 64.8981 25.006 64.739 24.1605C64.5799 23.315 64.2934 22.4853 63.8797 21.6715C63.466 20.8472 62.8614 20.1866 62.0658 19.6899C61.3869 19.2671 60.533 19.0557 59.504 19.0557C58.9842 19.0557 58.4326 19.1139 57.8492 19.2301C55.0487 19.822 52.5877 21.2118 50.4662 23.3996V41.8846C50.5616 43.2163 50.8587 44.2203 51.3572 44.8967C51.7179 45.3934 52.0945 45.6947 52.487 45.8003L52.6779 45.8638V46.054Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M86.7659 46.1967C83.9018 46.1967 81.2233 45.3459 78.7305 43.6443C75.5799 41.4037 73.6493 38.3863 72.9386 34.592C72.7901 33.7676 72.7158 32.9433 72.7158 32.1189C72.7158 29.2653 73.5645 26.5966 75.2617 24.113C77.5318 20.974 80.5603 19.0505 84.3473 18.3423C85.1747 18.1944 86.0021 18.1204 86.8295 18.1204C89.6936 18.1204 92.3774 18.9712 94.8808 20.6728C98.0101 22.9134 99.9408 25.9308 100.673 29.725C100.821 30.5388 100.895 31.3527 100.895 32.1665C100.895 35.0201 100.042 37.6993 98.3337 40.2041C96.0742 43.3325 93.0457 45.256 89.2481 45.9747C88.4207 46.1227 87.5933 46.1967 86.7659 46.1967ZM88.4843 45.404L88.8503 45.3882L89.439 45.293C90.9029 44.8703 92.0485 43.7341 92.876 41.8846C93.714 40.035 94.133 37.805 94.133 35.1945C94.133 33.8311 94.0057 32.4043 93.7511 30.914C93.3268 28.5995 92.6691 26.5385 91.778 24.7312C90.887 22.924 89.858 21.4972 88.6912 20.4508C87.5243 19.3939 86.3309 18.8655 85.111 18.8655C84.8989 18.8972 84.6867 18.9342 84.4746 18.9765C84.2624 19.0082 84.0556 19.0452 83.854 19.0874C82.4856 19.6053 81.4142 20.7732 80.6399 22.591C79.8655 24.3983 79.4783 26.5597 79.4783 29.0751C79.4783 30.4384 79.6056 31.8652 79.8602 33.3555C80.2845 35.6701 80.9369 37.731 81.8173 39.5383C82.7084 41.3456 83.7373 42.7776 84.9042 43.8345C86.0711 44.8809 87.2644 45.404 88.4843 45.404Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M152.868 45.9589H152.168L140.107 18.7704L128.062 45.9113H127.362L109.254 5.10478C108.692 3.99505 108.13 3.11783 107.568 2.47312C107.005 1.82842 106.486 1.3581 106.008 1.06217C105.531 0.755677 105.144 0.560152 104.847 0.475601L104.401 0.364627V0.174387H116.605V0.364627L116.478 0.396334C116.393 0.417472 116.287 0.465032 116.16 0.539014C116.033 0.602428 115.905 0.702832 115.778 0.840228C115.651 0.977624 115.545 1.1573 115.46 1.37924C115.375 1.60119 115.332 1.88126 115.332 2.21947V2.29874C115.332 3.04913 115.576 3.98448 116.064 5.10478L130.767 38.2383L139.757 17.9936L134.061 5.15234C133.498 4.04261 132.936 3.16539 132.374 2.52068C131.812 1.87598 131.292 1.40566 130.815 1.10973C130.337 0.803237 129.95 0.607712 129.653 0.523161L129.207 0.412187V0.221947H141.412V0.412187L141.284 0.443894C141.2 0.465032 141.094 0.512592 140.966 0.586574C140.839 0.649988 140.712 0.750392 140.584 0.887788C140.457 1.01461 140.351 1.19429 140.266 1.4268C140.181 1.64875 140.139 1.92883 140.139 2.26703V2.3463C140.139 3.09669 140.383 4.03204 140.871 5.15234L143.162 10.3047L145.597 4.83527C146.021 3.79952 146.233 2.93287 146.233 2.23532C146.233 2.08736 146.212 1.9024 146.169 1.68046C146.138 1.44794 146.053 1.23656 145.915 1.04632C145.787 0.845512 145.65 0.697548 145.501 0.602428C145.353 0.507307 145.225 0.443894 145.119 0.412187L144.944 0.364627V0.174387H151.022V0.364627L150.577 0.475601C150.28 0.560152 149.893 0.755677 149.415 1.06217C148.938 1.3581 148.413 1.82842 147.84 2.47312C147.278 3.11783 146.721 3.99505 146.169 5.10478L143.512 11.0815L155.573 38.27L170.403 4.88283C170.827 3.84708 171.039 2.98043 171.039 2.28288C171.039 2.13492 171.018 1.94996 170.976 1.72802C170.944 1.4955 170.859 1.28412 170.721 1.09388C170.594 0.893072 170.456 0.745108 170.307 0.649988C170.159 0.554867 170.032 0.491454 169.926 0.459747L169.75 0.412187V0.221947H175.829V0.412187L175.383 0.523161C175.086 0.607712 174.699 0.803237 174.222 1.10973C173.744 1.40566 173.219 1.87598 172.646 2.52068C172.084 3.16539 171.527 4.03732 170.976 5.13649L152.868 45.9589Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M177.266 45.9272H166.589V45.7369L166.796 45.6735C167.188 45.5784 167.565 45.2772 167.926 44.7699C168.414 44.104 168.705 43.1 168.801 41.7577V25.8727C168.801 23.6109 168.472 22.1049 167.814 21.3545C167.623 21.1431 167.443 21.0216 167.273 20.9898L167.178 20.974V20.7045C167.761 20.7045 168.302 20.6886 168.801 20.6569C170.753 20.509 172.264 20.1655 173.336 19.6265C174.142 19.2248 174.667 18.8179 174.911 18.4057L175.038 18.1997V31.136C176.438 24.7312 178.576 20.6833 181.451 18.9923C182.405 18.4322 183.418 18.1521 184.49 18.1521C185.498 18.1521 188.381 19.2618 188.89 20.2547L186.017 22.9081L185.524 22.5276C185.195 22.2845 184.76 22.0256 184.219 21.7508C183.678 21.4654 183.084 21.2699 182.437 21.1642C182.225 21.122 182.013 21.1008 181.801 21.1008C181.366 21.1008 180.873 21.2065 180.321 21.4179C179.769 21.6187 179.207 22.1154 178.634 22.9081C177.828 24.3349 177.176 25.8568 176.677 27.4739C175.85 30.1055 175.303 32.5998 175.038 34.9567V41.7577C175.134 43.0894 175.431 44.0935 175.929 44.7699C176.29 45.2772 176.667 45.5784 177.059 45.6735L177.266 45.7369V45.9272Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M190.144 45.9272C188.001 45.9272 186.325 45.4833 185.115 44.5955C183.747 43.5597 183.063 41.9903 183.063 39.887C183.063 39.6123 183.073 39.3269 183.095 39.031C183.296 36.8643 184.336 34.9884 186.213 33.403C187.709 32.1559 189.693 31.1201 192.164 30.2958C194.498 29.5242 196.832 29.0116 199.165 28.758V23.891C199.165 22.4959 198.996 21.4443 198.656 20.7362C198.317 20.0175 197.802 19.5261 197.113 19.2618C196.423 18.9976 195.554 18.8655 194.503 18.8655C193.984 18.9078 193.474 18.987 192.976 19.1033C192.35 19.4309 191.83 19.9382 191.416 20.6252C191.013 21.3016 190.695 22.015 190.462 22.7654C190.228 23.5158 190.069 24.1605 189.984 24.6995L189.841 25.5081L186.017 22.9081C186.728 21.122 187.948 20.8683 189.666 19.8008C191.385 18.7228 193.321 18.1838 195.474 18.1838C196.747 18.1838 197.977 18.3899 199.165 18.8021L199.325 18.8496C200.491 19.283 201.51 19.8643 202.38 20.5935L203.032 21.1959C203.085 21.2382 203.133 21.2858 203.175 21.3386C203.515 21.6874 203.817 22.0626 204.082 22.4642L204.194 22.6544C204.469 23.0666 204.671 23.4418 204.798 23.78C205.095 24.4776 205.286 25.1804 205.371 25.8885C205.371 26.0154 205.382 26.1316 205.403 26.2373V40.9809C205.403 42.5557 205.663 43.75 206.183 44.5638C206.564 45.1451 206.973 45.5044 207.408 45.6418L207.631 45.7052V45.8955H203.08C202.369 45.8955 201.717 45.7264 201.123 45.3882C200.539 45.0394 200.072 44.5744 199.722 43.9931C198.184 44.5744 196.397 45.0658 194.36 45.4674C192.79 45.7739 191.385 45.9272 190.144 45.9272ZM194.233 44.6748C194.678 44.6748 195.14 44.6325 195.617 44.5479C197.092 44.1992 198.365 43.824 199.436 43.4223C199.256 42.9784 199.165 42.4976 199.165 41.9797V29.3921C198.179 29.5084 196.917 29.7303 195.378 30.058C194.159 30.3856 193.061 31.1201 192.085 32.2616C190.738 33.8258 190.064 36.077 190.064 39.0151C190.064 39.3956 190.075 39.7919 190.096 40.2041C190.287 43.1845 191.666 44.6748 194.233 44.6748Z"
                        fill="#1F1F1F"/>
                    <path
                        d="M218.296 64H207.62V63.8098L207.827 63.7463C208.219 63.6407 208.596 63.3394 208.956 62.8427C209.444 62.1769 209.736 61.1728 209.831 59.8306V25.9361C209.831 24.6573 209.725 23.6215 209.513 22.8288C209.333 22.1947 209.11 21.7297 208.845 21.4337C208.643 21.2118 208.458 21.085 208.288 21.0533L208.208 21.0374V20.7679C208.792 20.7679 209.333 20.752 209.831 20.7203C211.773 20.5829 213.284 20.2395 214.366 19.6899C215.162 19.2988 215.687 18.8972 215.942 18.485L216.069 18.2631V22.274C218.233 20.1708 220.779 18.8761 223.706 18.3899C224.449 18.2631 225.202 18.1997 225.966 18.1997C227.843 18.1997 229.631 18.5537 231.328 19.2618C233.025 19.9594 234.542 20.974 235.879 22.3057C237.215 23.6374 238.234 25.1487 238.934 26.8397C239.645 28.5308 240 30.3116 240 32.1823C240 34.0424 239.645 35.8233 238.934 37.5249C238.234 39.2159 237.215 40.7273 235.879 42.059C234.542 43.3801 233.025 44.3947 231.328 45.1028C229.631 45.8003 227.843 46.1491 225.966 46.1491C225.202 46.1491 224.449 46.091 223.706 45.9747C220.779 45.4886 218.233 44.1886 216.069 42.0748V59.8306C216.122 60.581 216.228 61.1992 216.387 61.6854C216.557 62.1716 216.748 62.5573 216.96 62.8427C217.172 63.1386 217.379 63.3553 217.58 63.4927C217.782 63.6301 217.952 63.7146 218.09 63.7463L218.296 63.8098V64ZM224.597 45.293C225.298 45.293 226.008 45.1662 226.73 44.9126C227.462 44.6589 228.029 44.3471 228.432 43.9772C229.79 42.7618 230.872 41.1236 231.678 39.0627C232.484 36.9912 232.887 34.6977 232.887 32.1823C232.887 29.9417 232.564 27.8755 231.917 25.9837C231.27 24.0812 230.389 22.4959 229.276 21.2276L229.26 21.1959L229.021 20.9423C227.716 19.6634 226.258 19.024 224.645 19.024H224.391C223.903 19.024 223.537 19.0505 223.293 19.1033C221.691 19.4415 220.222 20.0281 218.885 20.863C217.835 21.5183 216.896 22.3004 216.069 23.2093V41.1553C216.896 42.0537 217.835 42.8305 218.885 43.4858C220.094 44.2467 221.41 44.7963 222.831 45.1345C223.468 45.2402 224.056 45.293 224.597 45.293Z"
                        fill="#1F1F1F"/>
                </svg>
            </div>
            <div className={css.price_and_korzina}>
                <div className={css.price}>
                    <div className={css.price_logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                            <path
                                d="M29.0417 29.0417H29.0588M29.725 23.9167H30.75C32.342 23.9167 33.1379 23.9167 33.7659 24.1767C34.603 24.5235 35.2682 25.1887 35.615 26.0258C35.875 26.6538 35.875 27.4497 35.875 29.0417C35.875 30.6337 35.875 31.4296 35.615 32.0576C35.2682 32.8947 34.603 33.5599 33.7659 33.9067C33.1379 34.1667 32.342 34.1667 30.75 34.1667H10.25C8.65804 34.1667 7.86206 34.1667 7.23416 33.9067C6.39699 33.5599 5.73185 32.8947 5.38508 32.0576C5.125 31.4296 5.125 30.6337 5.125 29.0417C5.125 27.4497 5.125 26.6538 5.38508 26.0258C5.73185 25.1887 6.39699 24.5235 7.23416 24.1767C7.86206 23.9167 8.65804 23.9167 10.25 23.9167H11.275M20.5 25.625V6.83337M20.5 25.625L15.375 20.5M20.5 25.625L25.625 20.5"
                                stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className={css.price_text}>
                        Прайс-лист
                    </div>
                </div>
                <div className={css.korzina} onClick={() => dispatch(flowerAction.open_basket())}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                        <rect width="71" height="71" rx="35.5" fill="white"/>
                        <path
                            d="M26.7663 25H48L45.1111 35.5H28.3219M46.5556 41.5H29.2222L26.3333 22H22M30.6667 47.5C30.6667 48.3284 30.02 49 29.2222 49C28.4245 49 27.7778 48.3284 27.7778 47.5C27.7778 46.6716 28.4245 46 29.2222 46C30.02 46 30.6667 46.6716 30.6667 47.5ZM46.5556 47.5C46.5556 48.3284 45.9089 49 45.1111 49C44.3133 49 43.6667 48.3284 43.6667 47.5C43.6667 46.6716 44.3133 46 45.1111 46C45.9089 46 46.5556 46.6716 46.5556 47.5Z"
                            stroke="#1F1F1F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export {HeaderComponent};