try{
    FSR.CPPS.set('cidx',cidx);
    FSR.CPPS.set('city',city);
    FSR.CPPS.set('state',state);
    FSR.CPPS.set('county',county);
    FSR.CPPS.set('zip',zip);
    FSR.CPPS.set('services',services.replace(/,/g, '|'));
    FSR.CPPS.set('custType',custType);
}catch (err){}