chrome.webRequest.onBeforeRequest.addListener(function(details) {
    console.log(details.url);
    if (!details.url.startsWith('https://foursquare.com/city-guide')) {
        return {redirectUrl: 'https://foursquare.com/city-guide'};
    }
}, {
    urls: ['https://foursquare.com/'], // or <all_urls>
    types: ['main_frame', 'sub_frame'],
}, [
    'blocking'
]);