
export default function getDomainInfo(domain) {
    let scheme;
    let name;
    if (domain.startsWith('https://')) {
        scheme = 'https';
        name = domain.replace('https://', '');
    } else if (domain.startsWith('http://')) {
    scheme = 'http';
    name = domain.replace('http://', '');
    } else {
    scheme = 'http';
    name = domain;
 }
 return {
    scheme: scheme,
    name: name
 };
}
