(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BuDz:function(e,t,i){"use strict";i.r(t),i.d(t,"StaticCustomerUiModule",(function(){return m}));var o=i("2kYt"),n=i("47kq"),a=i("sEIs"),r=i("XZLj"),c=i("lwwr"),s=i("EM62"),l=i("lu7F"),b=i("tQqY"),u=i("Pq5H");const d=function(e){return[e]};function y(e,t){if(1&e&&(s.Vb(0,"a",1),s.Qb(1,"fa-icon",2),s.Gc(2," Back\n"),s.Ub()),2&e){const e=s.hc();s.mc("routerLink",s.qc(3,d,e.lastLocation)),s.Db("aria-label",e.ariaLabel),s.Cb(1),s.mc("icon",e.faChevronLeft)}}let h=(()=>{class e{constructor(e,t){this.backService=e,this.router=t,this.faChevronLeft=l.d,this.hasHistory=!1,this.ariaLabel="Go back to previous page"}ngOnInit(){this.displayBackButton()}displayBackButton(){this.backService.getBackLocationsLength()>0?(this.hasHistory=!0,this.lastLocation=this.backService.getBackLocation()):this.hasHistory=!1}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(r.a),s.Pb(a.e))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-back-button"]],inputs:{ariaLabel:"ariaLabel"},decls:1,vars:1,consts:[["link","","data-auto","back-button-back-link",3,"routerLink",4,"ngIf"],["link","","data-auto","back-button-back-link",3,"routerLink"],[3,"icon"]],template:function(e,t){1&e&&s.Ec(0,y,3,5,"a",0),2&e&&s.mc("ngIf",t.hasHistory)},directives:[o.k,a.f,b.a,u.a],styles:["a[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();const p=[{path:"accessibility",component:(()=>{class e{constructor(e,t){this.pageTitleService=e,this.redirect=t,this.title="Accessibility"}ngOnInit(){this.redirect.setRedirecting(!1),this.pageTitleService.setTitle(this.title)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(r.c),s.Pb(c.RedirectService))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-accessibility"]],decls:27,vars:1,template:function(e,t){1&e&&(s.Qb(0,"app-back-button"),s.Vb(1,"h1"),s.Gc(2),s.Ub(),s.Vb(3,"p"),s.Gc(4," The Digital Identity exchange helps people of all abilities access government services.\n"),s.Ub(),s.Vb(5,"p"),s.Gc(6,"You can use identity.gov.au with:"),s.Ub(),s.Vb(7,"ul"),s.Vb(8,"li"),s.Gc(9,"screen readers"),s.Ub(),s.Vb(10,"li"),s.Gc(11,"voice recognition software"),s.Ub(),s.Vb(12,"li"),s.Gc(13,"screen magnifiers."),s.Ub(),s.Ub(),s.Vb(14,"p"),s.Gc(15," identity.gov.au aims to meet the Web Content Accessibility Guidelines (WCAG) version 2.0 level AA.\n"),s.Ub(),s.Vb(16,"p"),s.Gc(17," You can use identity.gov.au with most web browsers, operating systems and mobile platforms.\n"),s.Ub(),s.Vb(18,"p"),s.Gc(19,"You can't use identity.gov.au with:"),s.Ub(),s.Vb(20,"ul"),s.Vb(21,"li"),s.Gc(22,"Internet Explorer"),s.Ub(),s.Vb(23,"li"),s.Gc(24,"an outdated browser."),s.Ub(),s.Ub(),s.Vb(25,"p"),s.Gc(26,"You'll need JavaScript enabled on your browser."),s.Ub()),2&e&&(s.Cb(2),s.Hc(t.title))},directives:[h],styles:[".mat-icon[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px}"]}),e})(),pathMatch:"full"},{path:"help",component:(()=>{class e{constructor(e,t,i){this.pageTitleService=e,this.route=t,this.redirect=i,this.title="Help",this.navigateToHelpFragment=e=>{setTimeout(()=>{if(e){const t=document.querySelector(`#${e}`);t.scrollIntoView(!0),t.focus()}},50)}}ngOnInit(){this.pageTitleService.setTitle(this.title),this.redirect.setRedirecting(!1)}ngAfterViewInit(){this.route.fragment.subscribe(this.navigateToHelpFragment)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(r.c),s.Pb(a.a),s.Pb(c.RedirectService))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-help"]],decls:71,vars:1,consts:[[1,"help-title"],["id","identity","aria-labelledby","identity-heading","aria-describedby","identity-desc","tabindex","-1"],["id","identity-heading"],["id","identity-desc"],[1,"cdk-visually-hidden"],["id","provider","aria-labelledby","provider-heading","aria-describedby","provider-desc","tabindex","-1"],["id","provider-heading"],["id","provider-desc"],["id","exchange","aria-labelledby","exchange-heading","aria-describedby","exchange-desc","tabindex","-1"],["id","exchange-heading"],["id","exchange-desc"],["id","scam","aria-labelledby","scam-heading","aria-describedby","scam-desc","tabindex","-1"],["id","scam-heading"],["id","scam-desc"],["link","","href","https://www.scamwatch.gov.au/report-a-scam","rel","noopener noreferrer","target","_blank"],["link","","href","https://www.cyber.gov.au/acsc/report","rel","noopener noreferrer","target","_blank"],["link","","href","https://www.idcare.org/","rel","noopener noreferrer","target","_blank"],["id","mygov","aria-labelledby","mygov-heading","aria-describedby","mygov-desc","tabindex","-1"],["id","mygov-heading"],["id","mygov-desc"],["id","consent","aria-labelledby","consent-heading","aria-describedby","consent-desc consent-desc2","tabindex","-1"],["id","consent-heading"],["id","consent-desc"],["id","security","aria-labelledby","security-heading","aria-describedby","security-desc security-desc2 security-desc3","tabindex","-1"],["id","security-heading"],["id","security-desc"],["id","security-desc2"],["link","","routerLink","/privacy"]],template:function(e,t){1&e&&(s.Qb(0,"app-back-button"),s.Vb(1,"h1",0),s.Gc(2),s.Ub(),s.Vb(3,"div",1),s.Vb(4,"h2",2),s.Gc(5,"What is a Digital Identity"),s.Ub(),s.Vb(6,"p",3),s.Gc(7," Your Digital Identity is an online and secure way to prove who you are. You can create your Digital Identity online using your identity documents. You can use your Digital Identity to prove who you are to government services online. "),s.Vb(8,"span",4),s.Gc(9," Select the back link at the top of the page to return to previous page "),s.Ub(),s.Ub(),s.Ub(),s.Vb(10,"div",5),s.Vb(11,"h2",6),s.Gc(12,"What is an identity provider"),s.Ub(),s.Vb(13,"p",7),s.Gc(14," An identity provider is an online service you use to create your Digital Identity. Your identity provider verifies details from your identity documents with records held by government. You can choose which identity provider will verify your identity. "),s.Ub(),s.Ub(),s.Vb(15,"div",8),s.Vb(16,"h2",9),s.Gc(17,"What is the Digital Identity exchange"),s.Ub(),s.Vb(18,"p",10),s.Gc(19," The Digital Identity exchange is an Australian Government secure online platform you use to prove who you are with your Digital Identity. It exchanges details you consent to share, between your identity provider and the service you're accessing. Services Australia manages the exchange platform. "),s.Vb(20,"span",4),s.Gc(21," Select the back link at the top of the page to return to previous page "),s.Ub(),s.Ub(),s.Ub(),s.Vb(22,"div",11),s.Vb(23,"h2",12),s.Gc(24,"How to report a scam"),s.Ub(),s.Vb(25,"p",13),s.Gc(26," If you think you're a victim of identity crime, contact your local police. "),s.Qb(27,"br"),s.Gc(28," To report a scam, visit "),s.Vb(29,"a",14),s.Gc(30,"SCAMWatch"),s.Ub(),s.Gc(31," or the "),s.Vb(32,"a",15),s.Gc(33,"Australian Cybercrime Online Reporting Network"),s.Ub(),s.Gc(34," website. "),s.Qb(35,"br"),s.Gc(36," The "),s.Vb(37,"a",16),s.Gc(38,"IDCARE website"),s.Ub(),s.Gc(39," also provides access to specialised identity support for Australian and New Zealand citizens. "),s.Vb(40,"span",4),s.Gc(41," Select the back link at the top of the page to return to previous page "),s.Ub(),s.Ub(),s.Ub(),s.Vb(42,"div",17),s.Vb(43,"h2",18),s.Gc(44,"What is myGov"),s.Ub(),s.Vb(45,"p",19),s.Gc(46," myGov is a secure way to access government services online in one place. You can connect your Digital Identity to myGov and use it to sign in. "),s.Vb(47,"span",4),s.Gc(48," Select the back link at the top of the page to return to previous page "),s.Ub(),s.Ub(),s.Ub(),s.Vb(49,"div",20),s.Vb(50,"h2",21),s.Gc(51,"Your consent"),s.Ub(),s.Vb(52,"p",22),s.Gc(53," Your consent is important. We need your consent before sharing your Digital Identity details with a service. This gives you control of your Digital Identity and how it's used. "),s.Ub(),s.Ub(),s.Vb(54,"div",23),s.Vb(55,"h2",24),s.Gc(56,"Your privacy and security"),s.Ub(),s.Vb(57,"p",25),s.Gc(58,"You're in control of your privacy and security because:"),s.Ub(),s.Vb(59,"ul",26),s.Vb(60,"li"),s.Gc(61,"you choose who you share your details with"),s.Ub(),s.Vb(62,"li"),s.Gc(63,"only the details a service needs are shared"),s.Ub(),s.Vb(64,"li"),s.Gc(65,"Digital Identity meets government standards for data protection."),s.Ub(),s.Ub(),s.Vb(66,"p"),s.Gc(67," Read our "),s.Vb(68,"a",27),s.Gc(69,"Privacy Notice"),s.Ub(),s.Gc(70,". "),s.Ub(),s.Ub()),2&e&&(s.Cb(2),s.Hc(t.title))},directives:[h,b.a,a.f],styles:[".mat-icon[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px}.help-title[_ngcontent-%COMP%]{margin-bottom:16px}"]}),e})(),pathMatch:"full"},{path:"privacy",component:(()=>{class e{constructor(e,t){this.pageTitleService=e,this.redirect=t,this.title="Privacy"}ngOnInit(){this.pageTitleService.setTitle(this.title),this.redirect.setRedirecting(!1)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(r.c),s.Pb(c.RedirectService))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-privacy"]],decls:46,vars:1,consts:[["link","","routerLink","/help"],["link","","routerLink","/policy"]],template:function(e,t){1&e&&(s.Qb(0,"app-back-button"),s.Vb(1,"h1"),s.Gc(2),s.Ub(),s.Vb(3,"p"),s.Gc(4," Services Australia (we or us) manages the Digital Identity exchange on behalf of the Australian Government. "),s.Ub(),s.Vb(5,"h2"),s.Gc(6,"Verifying your identity online"),s.Ub(),s.Vb(7,"p"),s.Gc(8," You need to create a "),s.Vb(9,"a",0),s.Gc(10,"Digital Identity"),s.Ub(),s.Gc(11," with an identity provider using your personal information. Your identity provider will use this information to verify your identity and create your Digital Identity.\n"),s.Ub(),s.Vb(12,"p"),s.Gc(13," They'll share your verified identity details with us when you access our services with your Digital Identity. The types of information includes your name, date of birth, mobile phone number and email address.\n"),s.Ub(),s.Vb(14,"p"),s.Gc(15," With your consent, we'll then share your identity details with the service that needs to verify your identity. We'll only share the minimum amount of information the service you're trying to access needs to verify your identity.\n"),s.Ub(),s.Vb(16,"p"),s.Gc(17," Your identity provider and the service you're accessing will handle your information in line with their own privacy policies.\n"),s.Ub(),s.Vb(18,"p"),s.Gc(19," It's your choice whether to create and use a Digital Identity and which identity provider to use. If you don't want a Digital Identity, contact the service you're trying to access to verify your identity.\n"),s.Ub(),s.Vb(20,"h2"),s.Gc(21,"Acting on behalf of a business"),s.Ub(),s.Vb(22,"p"),s.Gc(23," If you're acting on behalf of a business, you'll need to verify your identity online with the Relationship Authorisation Manager. We'll share your identity details and permissions where the service needs this information.\n"),s.Ub(),s.Vb(24,"h2"),s.Gc(25,"Security of your details"),s.Ub(),s.Vb(26,"p"),s.Gc(27," We take security very seriously. We don't store your identity details. We only store information about your use of your Digital Identity with us.\n"),s.Ub(),s.Vb(28,"p"),s.Gc(29," We encrypt and store this information on secure servers in Australia. We don't store or disclose any of your information overseas.\n"),s.Ub(),s.Vb(30,"p"),s.Gc(31," We may use or disclose this information where the law requires or allows. This includes investigating fraud.\n"),s.Ub(),s.Vb(32,"p"),s.Gc(33," Read our "),s.Vb(34,"a",1),s.Gc(35,"Privacy Policy"),s.Ub(),s.Gc(36," for more information about how we store, collect or disclose your personal information. "),s.Ub(),s.Vb(37,"p"),s.Gc(38,"It also contains information about:"),s.Ub(),s.Vb(39,"ul"),s.Vb(40,"li"),s.Gc(41,"how we manage your personal information"),s.Ub(),s.Vb(42,"li"),s.Gc(43,"how you can access and correct your information "),s.Ub(),s.Vb(44,"li"),s.Gc(45,"how you can make a complaint."),s.Ub(),s.Ub()),2&e&&(s.Cb(2),s.Hc(t.title))},directives:[h,a.f,b.a],styles:[".mat-icon[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px}"]}),e})(),pathMatch:"full"},{path:"policy",component:(()=>{class e{constructor(e,t){this.pageTitleService=e,this.redirect=t,this.title="Privacy Policy for the Digital Identity exchange"}ngOnInit(){this.pageTitleService.setTitle(this.title),this.redirect.setRedirecting(!1)}}return e.\u0275fac=function(t){return new(t||e)(s.Pb(r.c),s.Pb(c.RedirectService))},e.\u0275cmp=s.Jb({type:e,selectors:[["app-privacy"]],decls:190,vars:1,consts:[["link","","href","https://www.digitalidentity.gov.au/","rel","noopener noreferrer","target","_blank"],[1,"none"],["link","","href","mailto:oa@dta.gov.au"],["link","","href","https://www.oaic.gov.au/","rel","noopener noreferrer","target","_blank"],["link","","href","mailto:enquiries@oaic.gov.au"],["link","","href","tel:+611300363992"],["link","","href","https://www.ombudsman.gov.au/","rel","noopener noreferrer","target","_blank"],["link","","href","mailto:ombudsman@ombudsman.gov.au"],["link","","href","tel:+611300362072"]],template:function(e,t){1&e&&(s.Qb(0,"app-back-button"),s.Vb(1,"h1"),s.Gc(2),s.Ub(),s.Vb(3,"p"),s.Gc(4," Services Australia (we or us) manages the Digital Identity exchange on behalf of the Australian Government. We facilitate the use and verification of your Digital Identity so you can access a range of government services online.\n"),s.Ub(),s.Vb(5,"p"),s.Gc(6," A Digital Identity is an online and secure way to prove who you are.\n"),s.Ub(),s.Vb(7,"p"),s.Gc(8," You can create a Digital Identity using an accredited online service called an identity provider. They use your personal information to verify your identity to create your Digital Identity. Identity providers will handle your information in line with their own privacy policies.\n"),s.Ub(),s.Vb(9,"p"),s.Gc(10," It's your choice to create and use a Digital Identity and which identity provider to use. If you don't want a Digital Identity, contact the service you're trying to access to verify your identity.\n"),s.Ub(),s.Vb(11,"p"),s.Gc(12," This Privacy Policy outlines how we collect, use and disclose your personal information when you use your Digital Identity. The privacy and security of your personal information is important to us, and we protect it by law.\n"),s.Ub(),s.Vb(13,"h2"),s.Gc(14,"Purposes of collection"),s.Ub(),s.Vb(15,"p"),s.Gc(16," Personal information means information or an opinion about an identified individual, or an individual who is reasonably identifiable.\n"),s.Ub(),s.Vb(17,"p"),s.Gc(18," We collect, use and share your personal information to facilitate the use and verification of your Digital Identity.\n"),s.Ub(),s.Vb(19,"p"),s.Gc(20," We may use your personal information for another purpose if you consent or where it's required or authorised by law.\n"),s.Ub(),s.Vb(21,"h2"),s.Gc(22,"What we collect and share and why"),s.Ub(),s.Vb(23,"p"),s.Gc(24," When you access a service with your Digital Identity, they'll tell us what information they need to verify your identity.\n"),s.Ub(),s.Vb(25,"p"),s.Gc(26," We'll then ask your identity provider for that information, and with your consent share the details with the service. The service then handles your personal information in line with its own privacy policy.\n"),s.Ub(),s.Vb(27,"p"),s.Gc(28," Sometimes your identity provider may need more information about you to verify your identity. If this happens, they'll tell us what additional information they need. We may also collect information from other agencies, called attribute service providers. They can verify certain information about you, which an identity provider may need to know.\n"),s.Ub(),s.Vb(29,"p"),s.Gc(30," The types of information we may collect and share includes your:\n"),s.Ub(),s.Vb(31,"ul"),s.Vb(32,"li"),s.Gc(33,"full name"),s.Ub(),s.Vb(34,"li"),s.Gc(35,"date of birth"),s.Ub(),s.Vb(36,"li"),s.Gc(37,"email address"),s.Ub(),s.Vb(38,"li"),s.Gc(39,"phone numbers"),s.Ub(),s.Vb(40,"li"),s.Gc(41,"business details such as ABN "),s.Ub(),s.Vb(42,"li"),s.Gc(43,"identity details from documents used to verify your identity"),s.Ub(),s.Vb(44,"li"),s.Gc(45,"myGov link between myGov and a linked service."),s.Ub(),s.Ub(),s.Vb(46,"p"),s.Gc(47," Some government services require a higher level of identity verification, and will ask for more information. We'll only collect and share the minimum amount of information the service you're accessing needs to know about you.\n"),s.Ub(),s.Vb(48,"p"),s.Gc(49," To protect your privacy, we collect and share your information using secure authentication protocols. We also ensure that:\n"),s.Ub(),s.Vb(50,"ul"),s.Vb(51,"li"),s.Gc(52,"your identity provider can't see what services you're accessing"),s.Ub(),s.Vb(53,"li"),s.Gc(54,"the service you're accessing can't see your identity documents held by your identity provider."),s.Ub(),s.Ub(),s.Vb(55,"p"),s.Gc(56," We also collect transactional data, such as the date and time of your session. This data helps us understand your use of your Digital Identity.\n"),s.Ub(),s.Vb(57,"h2"),s.Gc(58,"Your consent"),s.Ub(),s.Vb(59,"p"),s.Gc(60," We'll always ask for your consent before we collect and share any of your personal information for a particular transaction.\n"),s.Ub(),s.Vb(61,"p"),s.Gc(62," It's your choice to give consent. We won't release your personal information unless you agree or it's authorised or required by law. If we get an information request from another service, we'll ask for your consent first before sharing your information.\n"),s.Ub(),s.Vb(63,"p"),s.Gc(64," You can withdraw your consent at any time at "),s.Vb(65,"a",0),s.Gc(66,"digitalidentity.gov.au"),s.Ub(),s.Gc(67,".\n"),s.Ub(),s.Vb(68,"p"),s.Gc(69," If you don't consent, or withdraw your consent, you won't be able to use your Digital Identity. You'll need to verify your identity in another way so you can access online services. "),s.Ub(),s.Vb(70,"p"),s.Gc(71," When you give consent to share your details with a service, you can also tell us to remember your consent. The next time you access that service, we'll remember your consent, and share your details.\n"),s.Ub(),s.Vb(72,"p"),s.Gc(73," This is optional and you can change your mind at any time. If you don't want us to remember your consent, we'll ask for your consent every time you access a service.\n"),s.Ub(),s.Vb(74,"p"),s.Gc(75," We can use the data we collect when we share your details without your consent when it's authorised by law. For example, we can use your data in fraud investigations.\n"),s.Ub(),s.Vb(76,"h2"),s.Gc(77,"Transactional information"),s.Ub(),s.Vb(78,"p"),s.Gc(79," Transactional information is technical data about how you use your Digital Identity.\n"),s.Ub(),s.Vb(80,"p"),s.Gc(81," Some examples of the transactional data we collect includes:\n"),s.Ub(),s.Vb(82,"ul"),s.Vb(83,"li"),s.Gc(84,'a "Session ID" that we automatically generate when you want to use your Digital Identity'),s.Ub(),s.Vb(85,"li"),s.Gc(86,"the date and time of the transaction"),s.Ub(),s.Vb(87,"li"),s.Gc(88,"whether the transaction was successful"),s.Ub(),s.Vb(89,"li"),s.Gc(90,"the service that needs to verify your identity"),s.Ub(),s.Vb(91,"li"),s.Gc(92,"who you've consented to share your information with."),s.Ub(),s.Ub(),s.Vb(93,"p"),s.Gc(94," We'll collect and link this transactional information to help us identify and verify your transaction. This information is de-identified and will be encrypted. We won't link this information with any of your personal information.\n"),s.Ub(),s.Vb(95,"p"),s.Gc(96," We'll use and share this information with the service, your identity provider or attribute service providers for the following purposes:\n"),s.Ub(),s.Vb(97,"ul"),s.Vb(98,"li"),s.Gc(99,"auditing"),s.Ub(),s.Vb(100,"li"),s.Gc(101,"to comply with system operation requirements"),s.Ub(),s.Vb(102,"li"),s.Gc(103,"where required or authorised by law."),s.Ub(),s.Ub(),s.Vb(104,"p"),s.Gc(105," If a service you're accessing asks for another service's transactional information about you, we'll share that information if you consent.\n"),s.Ub(),s.Vb(106,"p"),s.Gc(107,' We\'ll also share this information with the Digital Identity governing body, the "Interim Oversight Authority". '),s.Ub(),s.Vb(108,"p"),s.Gc(109," This includes sharing tools we've used to analyse transactional data, which the Interim Oversight Authority uses this to:\n"),s.Ub(),s.Vb(110,"ul"),s.Vb(111,"li"),s.Gc(112,"track outages"),s.Ub(),s.Vb(113,"li"),s.Gc(114,"see how people use their Digital Identity"),s.Ub(),s.Vb(115,"li"),s.Gc(116,"deal with complaints."),s.Ub(),s.Ub(),s.Vb(117,"h2"),s.Gc(118,"How we store personal information"),s.Ub(),s.Vb(119,"p"),s.Gc(120," We hold your personal information for up to 12 hours so we can share it with the service you're accessing. After this time, we securely destroy your personal information.\n"),s.Ub(),s.Vb(121,"p"),s.Gc(122," We may also store de-identified transactional information about you. All information we hold is encrypted and stored in our secure servers.\n"),s.Ub(),s.Vb(123,"h2"),s.Gc(124,"Overseas disclosure"),s.Ub(),s.Vb(125,"p"),s.Gc(126," We won't store or disclose your personal or transactional information overseas. We keep all of your information in secure servers in Australia.\n"),s.Ub(),s.Vb(127,"h2"),s.Gc(128,"How to access and correct information about you"),s.Ub(),s.Vb(129,"p"),s.Gc(130," You can view your transaction history and change your consent preferences at any time. However, you can't change any de-identified transactional information we collect and store about your use of your Digital Identity.\n"),s.Ub(),s.Vb(131,"p"),s.Gc(132," We don't retain your personal information for more than 12 hours. To access or correct your personal information, contact your identity provider, services you've accessed or attribute service provider.\n"),s.Ub(),s.Vb(133,"p"),s.Gc(134," You have the right to request documents held by government agencies under the Freedom of Information Act 1982 (Cth).\n"),s.Ub(),s.Vb(135,"h2"),s.Gc(136,"How to make a complaint about privacy"),s.Ub(),s.Vb(137,"p"),s.Gc(138," You can contact your identity provider or relevant service to complain about how they handle your personal information.\n"),s.Ub(),s.Vb(139,"p"),s.Gc(140," If you want to complain about how we've used your Digital Identity, contact the Interim Oversight Authority.\n"),s.Ub(),s.Vb(141,"p"),s.Gc(142," They'll coordinate with the service, your identity provider and any attribute service providers to investigate, respond, or refer your complaint. "),s.Ub(),s.Vb(143,"p"),s.Gc(144," You can contact the Interim Oversight Authority at:\n"),s.Ub(),s.Vb(145,"ul",1),s.Vb(146,"li"),s.Gc(147," Email: "),s.Vb(148,"a",2),s.Gc(149,"oa@dta.gov.au"),s.Ub(),s.Ub(),s.Ub(),s.Vb(150,"p"),s.Gc(151," You can also contact the Office of the Australian Information Commissioner at:\n"),s.Ub(),s.Vb(152,"ul",1),s.Vb(153,"li"),s.Gc(154," Website: "),s.Vb(155,"a",3),s.Gc(156,"oaic.gov.au"),s.Ub(),s.Ub(),s.Vb(157,"li"),s.Gc(158," Email: "),s.Vb(159,"a",4),s.Gc(160,"enquiries@oaic.gov.au"),s.Ub(),s.Ub(),s.Vb(161,"li"),s.Gc(162," Address: GPO Box 5218, Sydney NSW 2001 "),s.Ub(),s.Vb(163,"li"),s.Gc(164," Phone: "),s.Vb(165,"a",5),s.Gc(166,"1300 363 992"),s.Ub(),s.Ub(),s.Ub(),s.Vb(167,"p"),s.Gc(168," And contact the Commonwealth Ombudsman at:\n"),s.Ub(),s.Vb(169,"ul",1),s.Vb(170,"li"),s.Gc(171," Website: "),s.Vb(172,"a",6),s.Gc(173,"ombudsman.gov.au"),s.Ub(),s.Ub(),s.Vb(174,"li"),s.Gc(175," Email: "),s.Vb(176,"a",7),s.Gc(177,"ombudsman@ombudsman.gov.au"),s.Ub(),s.Ub(),s.Vb(178,"li"),s.Gc(179," Address: GPO Box 442, Canberra ACT 2601 "),s.Ub(),s.Vb(180,"li"),s.Gc(181," Phone: "),s.Vb(182,"a",8),s.Gc(183,"1300 362 072"),s.Ub(),s.Ub(),s.Ub(),s.Vb(184,"h2"),s.Gc(185,"Updates to the Privacy Policy "),s.Ub(),s.Vb(186,"p"),s.Gc(187," We review this Privacy Policy yearly and last updated it on March 2021. Please check this policy regularly to make sure you understand any changes.\n"),s.Ub(),s.Vb(188,"p"),s.Gc(189," When using your Digital Identity, you agree to Services Australia handling your personal information in line with this Privacy Policy. "),s.Ub()),2&e&&(s.Cb(2),s.Hc(t.title))},directives:[h,b.a],styles:[".mat-icon[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px}ul.none[_ngcontent-%COMP%]{list-style-type:none}"]}),e})(),pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(p)],a.g]}),e})(),m=(()=>{class e{}return e.\u0275mod=s.Nb({type:e}),e.\u0275inj=s.Mb({factory:function(t){return new(t||e)},imports:[[o.c,n.a,f]]}),e})()}}]);