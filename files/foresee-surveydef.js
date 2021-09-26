FSR.surveydefs = [{
    platform: 'tablet',
    name: 'tablet',
    section: 'rmain',
    invite: {
        when: 'onentry',
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email or text you later a brief customer satisfaction survey so we can improve your tablet experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            locale: "en"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email/text me",
            locale: "en",
            mobileExitDialog: {
                support: "b", //e for email only, s for sms only, b for both
                inputMessage: "email or mobile number",
                emailMeButtonText: "email me",
                textMeButtonText: "text me",
                fieldRequiredErrorText: "Enter a mobile number or email address",
                invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
            }
        }]],
        exclude: {
            urls: ['/pay-bill', '/profile', '/login', '/reset-password', '/recover-id', '/security-questions-needed', 'webmail.optimum.net', 'espanol.optimum.net', '/access-denied', '/locked-out']
        }
    },
    repeatdays: 90,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 50,
        lf: 2
    },
    include: {
        urls: ['.']
    }
}, {
    platform: 'phone',
    name: 'mobile_web',
    section: 'rmain',
    invite: {
        when: 'onentry',
        /* Mobile */
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Can we email or text you later a brief customer satisfaction survey so we can improve your mobile experience?",
            attribution: "Conducted by ForeSee.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll help",
            locale: "en"
        }], [{
            reverseButtons: false,
            headline: "Thank you for helping!",
            blurb: "Please provide your email address or mobile number (US and CA only). After your visit we'll send you a link to the survey. Text Messaging rates apply.",
            attribution: "ForeSee's <a class='fsrPrivacy' href='//www.foresee.com/privacy-policy.shtml' target='_blank'>Privacy Policy</a>",
            declineButton: "Cancel",
            acceptButton: "email/text me",
            locale: "en",
            mobileExitDialog: {
                support: "b", //e for email only, s for sms only, b for both
                inputMessage: "email or mobile number",
                emailMeButtonText: "email me",
                textMeButtonText: "text me",
                fieldRequiredErrorText: "Enter a mobile number or email address",
                invalidFormatErrorText: "Format should be: name@domain.com or 123-456-7890"
            }
        }]],
        exclude: {
            urls: ['/pay-bill', '/profile', '/login', '/reset-password', '/recover-id', '/security-questions-needed', 'webmail.optimum.net', 'espanol.optimum.net', '/access-denied', '/locked-out']
        }
    },
    repeatdays: 90,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 22,
        lf: 2
    },
    include: {
        urls: ['.']
    }
}, {
    platform: 'desktop',
    name: 'browse',
    section: 'rmain',
    invite: {
        when: 'onentry',
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Le agradeceríamos sus opiniones y comentarios!",
            blurb: "Le agrademos su visita a nuestro sitio web. Usted ha sido elegido(a) al azar para participar en una breve encuesta de satisfacción del cliente para informarnos acerca de cómo podemos mejorar su experiencia con nosotros.",
            noticeAboutSurvey: "La encuesta está diseñada para medir toda su experiencia con nosotros, sírvase buscarla al finalizar su visita.",
            attribution: "Esta encuesta se realiza a través de una empresa independiente, ForeSee, en nombre del sitio que usted está visitando.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No, gracias",
            acceptButton: "Sí, deseo dar mi opinión"
        }]],
        exclude: {
            urls: ['/pay-bill', '/profile', '/login', '/reset-password', '/recover-id', '/security-questions-needed', 'webmail.optimum.net', '/access-denied', '/locked-out']
        }
    },
    repeatdays: 60,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 100,
        lf: 2
    },
    links: {
        pause: [{
            tag: 'a',
            attribute: 'href',
            patterns: ['webmail.optimum.net']
        }]
    },
    include: {
        cookies: [{
            name: ['MP_LANG'],
            value: ['es']
        }]
    }
}, {
    platform: 'desktop',
    name: 'browse',
    section: 'rmain',
    invite: {
        when: 'onentry',
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting Optimum.net. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback"
        }]],
        exclude: {
            urls: ['/pay-bill', '/profile', '/login', '/reset-password', '/recover-id', '/security-questions-needed', 'webmail.optimum.net', 'espanol.optimum.net', '/access-denied', '/locked-out']
        }
    },
    repeatdays: 90,
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 11,
        lf: 2
    },
    links: {
        pause: [{
            tag: 'a',
            attribute: 'href',
            patterns: ['webmail.optimum.net']
        }]
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    
    repeatoverride: false,
    
    altcookie: {},
    
    language: {
        locale: 'en',
        src: 'cookie',
        type: 'client',
        name: 'MP_LANG',
        locales: [{
            match: 'es',
            locale: 'es'
        }]
    
    },
    
    exclude: {},
    
    zIndexPopup: 10000,
    
    ignoreWindowTopCheck: false,
    
    ipexclude: 'fsr$ip',
    
    mobileHeartbeat: {
        delay: 60, /*mobile on exit heartbeat delay seconds*/
        max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },
    
    invite: {
    
        // For no site logo, comment this line:
        siteLogo: "sitelogo.jpg",
        
        //alt text fore site logo img
        siteLogoAlt: "",
        
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting Optimum.net. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback",
            error: "Error",
            warnLaunch: "this will launch a new window",
            locales: {
                "sp": {
                    headline: "¡Le agradeceríamos sus opiniones y comentarios!",
                    blurb: "Le agrademos su visita a nuestro sitio web. Usted ha sido elegido(a) al azar para participar en una breve encuesta de satisfacción del cliente para informarnos acerca de cómo podemos mejorar su experiencia con nosotros.",
                    noticeAboutSurvey: "La encuesta está diseñada para medir toda su experiencia con nosotros, sírvase buscarla al finalizar su visita.",
                    attribution: "Esta encuesta se realiza a través de una empresa independiente, ForeSee, en nombre del sitio que usted está visitando.",
                    closeInviteButtonText: "Haga clic para cerrar.",
                    declineButton: "No, gracias",
                    acceptButton: "Sí, deseo dar mi opinión"
                }
            }
        
        }]],
        
        exclude: {
            urls: [],
            referrers: [],
            userAgents: [],
            browsers: [],
            cookies: [],
            variables: []
        },
        include: {
            local: ['.']
        },
        
        delay: 0,
        timeout: 0,
        
        hideOnClick: false,
        
        hideCloseButton: false,
        
        css: 'foresee-dhtml.css',
        
        hide: [],
        
        hideFlash: false,
        
        type: 'dhtml',
        /* desktop */
        // url: 'invite.html'
        /* mobile */
        url: 'invite-mobile.html',
        back: 'url'
    
        //SurveyMutex: 'SurveyMutex'
    },
    
    tracker: {
        width: '690',
        height: '415',
        timeout: 3,
		pause: 30,
        adjust: true,
        alert: {
            enabled: false,
            message: 'The survey is now available.'
        },
        url: 'tracker.html',
        locales: [{
            locale: 'es',
            url: 'tracker_spanish.html'
        }]
    },
    
    survey: {
        width: 690,
        height: 600
    },
    
    qualifier: {
        footer: '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        width: '690',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        url: 'qualifying.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '690',
        height: '400'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false,
        user_agent: false,
        entry: false,
        entry_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802,
            followup: 803,
            information: 804,
            content: 805
        },
        pd: 7,
        custom: {}
    },
    
    previous: false,
    
    analytics: {
        google_local: false,
        google_remote: false
    },
    
    cpps: {
        webmailversion: {
            source: 'url',
            patterns: [{
                regex: 'uwc.webmail.optimum.net',
                value: 'uwc'
            }, {
                regex: 'webtop.webmail.optimum.net',
                value: 'webtop'
            }]
        }
    },
    
    mode: 'first-party'
};
