/*
 * SPDX-FileCopyrightText: 2023 Samagra <https://samagra.gov.in>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;
