import { useState } from "react";

const MEDIANO_PHOTO     = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774049461/colorizer-frr1121.jpg_noxcoz.avif";
const LIGERO_PHOTO      = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774049448/17-cbm-refrigerated-delivery-truck-witcde61b4c-d7ee-4034-8ae6-f098a4479852.jpg_mffcwa.webp";
const INTERURBANO_PHOTO = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774049448/camion-carga-logistica-autopista-interurbana-autopista-multimodal-cadena-suministro-intermodal-mercancias_909686-822.jpg_wmtryy.avif";
const PICKUP_PHOTO      = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774049448/changan-hunter-4x4-off-road-pickup4700dbe9-6075-48b3-ba9e-280e88acdcb2.jpg_gfqbhr.webp";

const LORENA_PHOTO   = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774048635/WhatsApp_Image_2026-03-20_at_16.55.37_3_s0r1po.jpg";
const GIOVANNI_PHOTO = "https://res.cloudinary.com/dlmoudikf/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-20_at_16.55.37_2_vsyibz";
const HECTOR_PHOTO   = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774048889/WhatsApp_Image_2026-03-20_at_16.55.37_dawglg.jpg";
const DAVID_PHOTO    = "https://res.cloudinary.com/dlmoudikf/image/upload/f_auto,q_auto/WhatsApp_Image_2026-03-20_at_16.55.37_1_ycdltj";

const LOGO = "https://res.cloudinary.com/dlmoudikf/image/upload/v1774049026/Screenshot_2026-03-20_at_4.37.01_PM_wkicxs.png";

const SERVICES_DATA = {
  es: [
    { icon:"📊", title:"Asesoría Financiera y Auditoría", tag:"Finanzas", img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", desc:"Optimizamos tus recursos y garantizamos transparencia mediante análisis financieros, control interno y auditorías que fortalecen la toma de decisiones y el crecimiento de tu organización. Nuestro equipo te acompaña en cada etapa para asegurar resultados sólidos y sostenibles." },
    { icon:"🏥", title:"Consultoría para la Industria Farmacéutica", tag:"Salud", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", desc:"Brindamos soluciones estratégicas en Visita Médica, Compliance y relacionamiento médico, impulsando resultados sostenibles para laboratorios, distribuidores y equipos comerciales del sector salud." },
    { icon:"🏆", title:"Capacitación Corporativa en Liderazgo", tag:"Capacitación", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", desc:"Desarrollamos líderes de alto impacto por medio de programas prácticos de liderazgo situacional, coaching corporativo y habilidades gerenciales adaptadas a cada empresa." },
    { icon:"📈", title:"Gestión de Fuerzas de Ventas Tercerizadas", tag:"Comercial", img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", desc:"Administramos y potenciamos equipos comerciales externos, asegurando mayor productividad, cobertura estratégica y cumplimiento de objetivos de negocio." },
    { icon:"🩺", title:"Servicios de Enfermería", tag:"Salud", img:"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80", desc:"Ofrecemos personal de enfermería capacitado para atención profesional, cuidados paliativos, paciente geriátrico, salud ocupacional, campañas de prevención y soporte clínico." },
    { icon:"🥗", title:"Alimentación Institucional y Nutrición Escolar", tag:"Nutrición", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc:"Diseñamos y operamos soluciones de alimentación seguras y de alta calidad, apoyando programas de nutrición escolar e institucional con estándares confiables." },
    { icon:"📦", title:"Productos y Suministros Institucionales", tag:"Suministros", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", desc:"Proveemos material de oficina, papelería y suministros esenciales para garantizar el funcionamiento ágil de empresas, instituciones educativas y entidades gubernamentales." },
    { icon:"💊", title:"Medicamentos y Productos Nutricionales", tag:"Salud & Nutrición", img:"https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=80", desc:"Ofrecemos soluciones integrales en medicamentos y productos nutricionales, garantizando calidad, seguridad y respaldo profesional. Nuestro portafolio está orientado a la prevención, tratamiento y fortalecimiento de la salud, apoyando tanto a instituciones como a personas en el cuidado integral del bienestar, con estándares confiables y enfoque en resultados efectivos." },
    { icon:"👨🏻\u200d🍳", title:"Suministros para Restaurantes", tag:"Gastronomía", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", desc:"Proveemos insumos y productos especializados para el sector gastronómico, asegurando calidad, eficiencia y continuidad operativa. Nuestro portafolio abarca una amplia gama de insumos indispensables para la operación diaria, brindando soluciones prácticas y confiables que permiten a restaurantes y negocios de alimentos mantener altos estándares de higiene, eficiencia y calidad en el servicio." }
  ],
  en: [
    { icon:"📊", title:"Financial Advisory & Auditing", tag:"Finance", img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80", desc:"We optimize your resources and ensure transparency through financial analysis, internal control and audits that strengthen decision-making and organizational growth. Our team accompanies you at every stage to deliver solid, sustainable results." },
    { icon:"🏥", title:"Pharmaceutical Industry Consulting", tag:"Health", img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", desc:"We provide strategic solutions in Medical Visits, Compliance and physician engagement, driving sustainable results for laboratories, distributors and commercial teams in the healthcare sector." },
    { icon:"🏆", title:"Corporate Leadership Training", tag:"Training", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", desc:"We develop high-impact leaders through practical programs in situational leadership, corporate coaching and managerial skills tailored to each organization." },
    { icon:"📈", title:"Outsourced Sales Force Management", tag:"Commercial", img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", desc:"We manage and strengthen external sales teams, ensuring greater productivity, strategic coverage and achievement of business objectives." },
    { icon:"🩺", title:"Nursing Services", tag:"Health", img:"https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80", desc:"We offer trained nursing staff for professional care, palliative care, geriatric patients, occupational health, prevention campaigns and clinical support." },
    { icon:"🥗", title:"Institutional Food & School Nutrition", tag:"Nutrition", img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc:"We design and operate safe, high-quality food solutions, supporting school and institutional nutrition programs with reliable standards." },
    { icon:"📦", title:"Institutional Products & Supplies", tag:"Supplies", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", desc:"We supply office materials, stationery and essential supplies to ensure the smooth operation of businesses, educational institutions and government entities." },
    { icon:"💊", title:"Medications & Nutritional Products", tag:"Health & Nutrition", img:"https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=80", desc:"We offer comprehensive solutions in medications and nutritional products, ensuring quality, safety and professional support. Our portfolio focuses on prevention, treatment and health strengthening for both institutions and individuals." },
    { icon:"👨🏻\u200d🍳", title:"Restaurant Supplies", tag:"Gastronomy", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", desc:"We supply specialized inputs and products for the food service sector, ensuring quality, efficiency and operational continuity. Our portfolio covers a wide range of essential supplies for daily operations, helping restaurants maintain high standards of hygiene, efficiency and service quality." }
  ]
};

const TEAM_DATA = {
  es: [
    { initials:"LP", name:"Lorena Paredes",    role:"Gerente General",          grad:"#003A4F,#006E8C", photo:LORENA_PHOTO },
    { initials:"GE", name:"Giovanni Escalante", role:"Director Comercial",       grad:"#0094B6,#006E8C", photo:GIOVANNI_PHOTO },
    { initials:"HA", name:"Héctor Aguirre",     role:"Gerente de Logística",     grad:"#7FD4E8,#0094B6", photo:HECTOR_PHOTO },
    { initials:"CG", name:"Christian González", role:"Supervisor de Logística",  grad:"#00C4E8,#0094B6", photo:"https://res.cloudinary.com/dlmoudikf/image/upload/v1774272310/WhatsApp_Image_2026-03-21_at_14.35.55_eidw9p.jpg" },
    { initials:"DS", name:"David Soto",         role:"Asistente Administrativo", grad:"#003A4F,#0094B6", photo:DAVID_PHOTO }
  ],
  en: [
    { initials:"LP", name:"Lorena Paredes",    role:"General Manager",          grad:"#003A4F,#006E8C", photo:LORENA_PHOTO },
    { initials:"GE", name:"Giovanni Escalante", role:"Commercial Director",      grad:"#0094B6,#006E8C", photo:GIOVANNI_PHOTO },
    { initials:"HA", name:"Héctor Aguirre",     role:"Logistics Manager",        grad:"#7FD4E8,#0094B6", photo:HECTOR_PHOTO },
    { initials:"CG", name:"Christian González", role:"Logistics Supervisor",     grad:"#00C4E8,#0094B6", photo:"https://res.cloudinary.com/dlmoudikf/image/upload/v1774272310/WhatsApp_Image_2026-03-21_at_14.35.55_eidw9p.jpg" },
    { initials:"DS", name:"David Soto",         role:"Administrative Assistant", grad:"#003A4F,#0094B6", photo:DAVID_PHOTO }
  ]
};

const VALUES_DATA = {
  es: ["Integridad y Ética","Excelencia Operativa","Innovación","Compromiso Social","Profesionalismo","Servicio al Cliente","Calidad Humana"],
  en: ["Integrity & Ethics","Operational Excellence","Innovation","Social Commitment","Professionalism","Customer Service","Human Quality"]
};

const TERMS_DATA = {
  es: [
    { num:"1", title:"INTRODUCCIÓN Y ALCANCE", content:"Estos Términos y Condiciones se aplican a todas las personas domiciliadas en la República de Guatemala que acceden y utilizan los servicios ofrecidos por Grupo G&M, Sociedad Anónima, una empresa multiservicios 100% guatemalteca registrada conforme a las leyes de la República de Guatemala. El acceso y uso de nuestros servicios, ya sea a través de plataformas digitales, sitios web, correo electrónico o medios presenciales, está sujeto a los siguientes Términos y Condiciones, los cuales podremos actualizar ocasionalmente sin previo aviso. Al acceder o utilizar nuestros servicios, usted acepta que ha leído, entendido y está de acuerdo en comprometerse con estos Términos y Condiciones, así como con nuestra Política de Privacidad y Protección de Datos Personales.", items:[] },
    { num:"2", title:"DESCRIPCIÓN DE SERVICIOS", content:"Grupo G&M ofrece los siguientes servicios:", items:["Asesoría Financiera y Auditoría","Consultoría Especializada para la Industria Farmacéutica","Capacitación Corporativa en Liderazgo y Desarrollo Organizacional","Gestión de Fuerzas de Ventas Tercerizadas","Servicios de Enfermería Especializada","Alimentación Institucional y Nutrición Escolar","Productos y Suministros Institucionales","Medicamentos y Productos Nutricionales","Suministros para Restaurantes"] },
    { num:"3", title:"ACEPTACIÓN DE TÉRMINOS Y MODIFICACIONES", content:"", items:["a) Usted es responsable de revisar periódicamente los cambios aplicables en estos Términos y Condiciones. El uso continuado de nuestros servicios tras la publicación de cualquier cambio constituye su aceptación de dichos cambios.","b) Si no está de acuerdo con estos Términos y Condiciones o no está satisfecho con nuestros servicios, el único recurso que tiene es dejar de utilizar nuestros servicios.","c) Grupo G&M se reserva el derecho de actualizar, modificar, suspender y eliminar servicios, total o parcialmente, en cualquier momento y sin aviso previo. Esto no generará responsabilidad alguna para Grupo G&M."] },
    { num:"4", title:"DESCARGOS DE RESPONSABILIDAD", content:"Usted reconoce y acepta que:", items:["a) Aunque nos esforzamos por ofrecer servicios de la más alta calidad, no garantizamos la exactitud, eficacia, oportunidad ni conveniencia de los resultados obtenidos. Cada persona asume la responsabilidad total y todos los riesgos derivados del uso de nuestros servicios.","b) Grupo G&M, Sociedad Anónima NO HACE DECLARACIONES NI GARANTÍAS DE NINGÚN TIPO con respecto a los servicios prestados. En ningún caso será responsable por daños de cualquier tipo, incluyendo daños directos, indirectos, especiales, emergentes o fortuitos.","c) En servicios de consultoría, asesoría o capacitación, las recomendaciones son de naturaleza general y pueden variar según las necesidades específicas de cada cliente.","d) En relación con servicios de salud y alimentación, Grupo G&M opera bajo protocolos de seguridad establecidos, pero no garantiza resultados específicos de salud."] },
    { num:"5", title:"SOBRE EL USO DE SERVICIOS", content:"", items:["a) Usted se compromete a utilizar nuestros servicios únicamente para propósitos legítimos y en conformidad con todas las leyes y reglamentos aplicables en la República de Guatemala.","b) Usted se compromete a no: interrumpir o interferir con nuestros sistemas; intentar evadir características de seguridad; realizar actividades ilícitas o fraudulentas; ni violar derechos de terceros.","c) Cualquier incumplimiento puede resultar en la terminación inmediata de los servicios sin responsabilidad para Grupo G&M."] },
    { num:"6", title:"PROPIEDAD INTELECTUAL Y DERECHOS DE AUTOR", content:"", items:["a) Todos los materiales, documentos, metodologías, contenidos y cualquier otra información proporcionada por Grupo G&M son propiedad exclusiva de Grupo G&M.","b) Se concede permiso para utilizar la Información únicamente para los propósitos para los cuales fue entregada, respetando la confidencialidad y sin modificar ni reproducir sin autorización previa escrita.","c) No se podrá hacer uso de ninguna marca comercial, logo o identidad visual de Grupo G&M sin autorización escrita previa.","d) Toda la propiedad intelectual generada en el contexto de los servicios permanece bajo la titularidad de Grupo G&M, salvo acuerdo escrito en contrario."] },
    { num:"7", title:"PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES", content:"", items:["a) Grupo G&M se compromete a proteger la privacidad de nuestros clientes conforme a la Constitución Política de la República de Guatemala, la Ley de Protección de Datos Personales (Decreto 57-2008) y demás normativa aplicable.","b) Al proporcionar datos personales, usted autoriza su tratamiento para: prestación de servicios, comunicación relacionada con nuestros servicios, cumplimiento legal y mejora continua.","c) Grupo G&M ha adoptado medidas de seguridad técnicas y organizacionales para proteger los datos personales contra acceso no autorizado o uso indebido.","d) Para mayor información sobre el tratamiento de sus datos, consulte nuestra Política de Privacidad disponible bajo solicitud o en nuestras oficinas."] },
    { num:"8", title:"LIMITACIÓN DE RESPONSABILIDAD", content:"", items:["a) Grupo G&M declina toda responsabilidad por los materiales, información u opiniones proporcionadas a través de nuestros servicios. La confianza en estos materiales corre bajo su propio riesgo.","b) Las Partes de Grupo G&M no serán responsables por daños directos, indirectos, punitivos, incidentales, especiales o derivados, incluyendo lucro cesante, daño comercial o lesiones personales, derivados del uso o imposibilidad de usar nuestros servicios."] },
    { num:"9", title:"JURISDICCIÓN Y LEY APLICABLE", content:"", items:["a) Estos Términos y Condiciones serán regidos e interpretados conforme a las leyes de la República de Guatemala.","b) Cualquier controversia será resuelta conforme al Código Procesal Civil y Mercantil de Guatemala y por los Tribunales de la República de Guatemala, con competencia en la Ciudad de Guatemala.","c) Las partes acuerdan someterse voluntariamente a la jurisdicción de los Tribunales de Guatemala."] },
    { num:"10", title:"DISPOSICIONES GENERALES", content:"", items:["a) Si alguna disposición de estos Términos es considerada inválida o no aplicable, las demás disposiciones permanecerán en plena vigencia.","b) Estos Términos y Condiciones, junto con nuestras Políticas de Privacidad, constituyen el acuerdo completo entre las partes.","c) La renuncia de Grupo G&M a hacer valer cualquier disposición no constituye una renuncia a dicho derecho en el futuro."] },
    { num:"11", title:"CONTACTO Y CONSULTAS", content:"Para cualquier pregunta, duda o solicitud relacionada con estos Términos y Condiciones, nuestra Política de Privacidad, o nuestros servicios, contáctenos a través de nuestros canales oficiales:", items:["Correo electrónico: grupoempresarialgym@outlook.com","Teléfono: (502) 5124-1957","Grupo G&M, Sociedad Anónima — República de Guatemala"] },
    { num:"12", title:"VIGENCIA", content:"Estos Términos y Condiciones entran en vigencia a partir de su publicación y permanecerán en vigor hasta que sean modificados o reemplazados. Última actualización: 2026.", items:[] }
  ],
  en: [
    { num:"1", title:"INTRODUCTION AND SCOPE", content:"These Terms and Conditions apply to all persons domiciled in the Republic of Guatemala who access and use the services offered by Grupo G&M, Sociedad Anónima, a 100% Guatemalan multi-service company registered under the laws of the Republic of Guatemala. Access to and use of our services, whether through digital platforms, websites, email or in-person channels, is subject to the following Terms and Conditions, which we may update occasionally without prior notice. By accessing or using our services, you agree that you have read, understood and agree to be bound by these Terms and Conditions, as well as our Privacy and Personal Data Protection Policy.", items:[] },
    { num:"2", title:"DESCRIPTION OF SERVICES", content:"Grupo G&M offers the following services:", items:["Financial Advisory & Auditing","Specialized Consulting for the Pharmaceutical Industry","Corporate Leadership and Organizational Development Training","Outsourced Sales Force Management","Specialized Nursing Services","Institutional Food & School Nutrition","Institutional Products & Supplies","Medications & Nutritional Products","Restaurant Supplies"] },
    { num:"3", title:"ACCEPTANCE OF TERMS AND MODIFICATIONS", content:"", items:["a) You are responsible for periodically reviewing applicable changes to these Terms and Conditions. Continued use of our services after the publication of any change constitutes your acceptance of such changes.","b) If you do not agree with these Terms and Conditions or are not satisfied with our services, your only recourse is to stop using our services.","c) Grupo G&M reserves the right to update, modify, suspend and eliminate services, in whole or in part, at any time and without prior notice. This will not generate any liability for Grupo G&M."] },
    { num:"4", title:"DISCLAIMERS", content:"You acknowledge and accept that:", items:["a) Although we strive to offer the highest quality services, we do not guarantee the accuracy, efficacy, timeliness or suitability of the results obtained. Each person assumes full responsibility and all risks arising from the use of our services.","b) Grupo G&M, Sociedad Anónima MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND regarding the services provided. In no event shall it be liable for damages of any kind, including direct, indirect, special, consequential or incidental damages.","c) In consulting, advisory or training services, recommendations are general in nature and may vary according to the specific needs of each client.","d) Regarding health and food services, Grupo G&M operates under established safety protocols but does not guarantee specific health outcomes."] },
    { num:"5", title:"USE OF SERVICES", content:"", items:["a) You agree to use our services only for legitimate purposes and in compliance with all applicable laws and regulations in the Republic of Guatemala.","b) You agree not to: interrupt or interfere with our systems; attempt to circumvent security features; engage in unlawful or fraudulent activities; or violate the rights of third parties.","c) Any breach may result in immediate termination of services without liability to Grupo G&M."] },
    { num:"6", title:"INTELLECTUAL PROPERTY AND COPYRIGHT", content:"", items:["a) All materials, documents, methodologies, content and any other information provided by Grupo G&M are the exclusive property of Grupo G&M.","b) Permission is granted to use the Information solely for the purposes for which it was provided, respecting confidentiality and without modifying or reproducing it without prior written authorization.","c) No trademark, logo or visual identity of Grupo G&M may be used without prior written authorization.","d) All intellectual property generated in the context of the services remains the property of Grupo G&M, unless otherwise agreed in writing."] },
    { num:"7", title:"PRIVACY AND PERSONAL DATA PROTECTION", content:"", items:["a) Grupo G&M is committed to protecting the privacy of our clients in accordance with the Political Constitution of the Republic of Guatemala, the Personal Data Protection Law (Decree 57-2008) and other applicable regulations.","b) By providing personal data, you authorize its processing for: service provision, service-related communications, legal compliance and continuous improvement.","c) Grupo G&M has adopted technical and organizational security measures to protect personal data against unauthorized access or misuse.","d) For more information about the processing of your data, please consult our Privacy Policy available upon request or at our offices."] },
    { num:"8", title:"LIMITATION OF LIABILITY", content:"", items:["a) Grupo G&M disclaims all liability for materials, information or opinions provided through our services. Reliance on such materials is at your own risk.","b) Grupo G&M parties shall not be liable for direct, indirect, punitive, incidental, special or consequential damages, including loss of profits, commercial damage or personal injury, arising from the use or inability to use our services."] },
    { num:"9", title:"JURISDICTION AND APPLICABLE LAW", content:"", items:["a) These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Guatemala.","b) Any dispute shall be resolved in accordance with the Code of Civil and Commercial Procedure of Guatemala and by the Courts of the Republic of Guatemala, with jurisdiction in Guatemala City.","c) The parties voluntarily agree to submit to the jurisdiction of the Courts of Guatemala."] },
    { num:"10", title:"GENERAL PROVISIONS", content:"", items:["a) If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.","b) These Terms and Conditions, together with our Privacy Policies, constitute the entire agreement between the parties.","c) Grupo G&M's failure to enforce any provision shall not constitute a waiver of that right in the future."] },
    { num:"11", title:"CONTACT AND INQUIRIES", content:"For any questions, concerns or requests related to these Terms and Conditions, our Privacy Policy, or our services, please contact us through our official channels:", items:["Email: grupoempresarialgym@outlook.com","Phone: (502) 5124-1957","Grupo G&M, Sociedad Anónima — Republic of Guatemala"] },
    { num:"12", title:"EFFECTIVE DATE", content:"These Terms and Conditions take effect upon publication and shall remain in force until modified or replaced. Last updated: 2026.", items:[] }
  ]
};

// ── Shared ──────────────────────────────────────────────────────
const T = {
  es: {
    // NAV
    nav: { home:"Inicio", services:"Servicios", about:"Acerca de Nosotros", team:"Nuestros Gerentes", catalogs:"Catálogos", fleet:"Empaque y Flotilla", terms:"Términos" },
    // HOME
    home_tag:"Grupo Empresarial · Guatemala",
    home_title1:"Soluciones que", home_title2:"suman", home_title3:"valor a tu empresa",
    home_desc:"Somos un grupo multiservicios 100% guatemalteco, comprometido con la eficiencia, ética y excelencia operativa en cada proyecto.",
    home_btn1:"Ver Servicios", home_btn2:"Conoce más",
    stats:[["8+","Áreas de servicio"],["100%","Guatemalteco"],["","Amplio equipo de profesionales"],["∞","Compromiso"]],
    contact_headline:"¿Listo para trabajar juntos?", contact_sub:"Contáctanos hoy mismo",
    // SERVICES
    svc_eyebrow:"Lo que ofrecemos", svc_title:"Nuestros Servicios",
    svc_desc:"Soluciones integrales que combinan experiencia técnica, acompañamiento estratégico y ejecución operativa, diseñadas para mejorar la eficiencia, productividad y sostenibilidad de nuestros clientes.",
    svc_contact_headline:"¿Interesado en alguno de nuestros servicios?", svc_contact_sub:"Escríbenos y con gusto te atendemos",
    // ABOUT
    about_eyebrow:"Quiénes somos", about_title:"Acerca de Nosotros",
    about_desc:"Un grupo multiservicios 100% guatemalteco, conformado por profesionales con amplia experiencia en múltiples sectores.",
    about_intro:"Somos un grupo multiservicios 100% guatemalteco, conformado por profesionales con amplia experiencia en consultoría financiera, industria farmacéutica, tecnología, salud y alimentación institucional. Nuestro propósito es ofrecer soluciones integrales con calidad, ética y excelencia operativa.",
    tab_mision:"Misión", tab_vision:"Visión", tab_valores:"Valores",
    mision_text:"Impulsar el crecimiento, eficiencia y bienestar de nuestros clientes mediante soluciones integrales de consultoría, capacitación, tecnología, salud, alimentación institucional y gestión comercial.",
    vision_text:"Consolidarnos como un grupo empresarial líder en servicios integrales a nivel nacional y regional, reconocido por su capacidad técnica, confiabilidad, innovación y alto estándar de calidad en cada una de sus unidades de negocio.",
    about_contact_headline:"Hablemos de tu próximo proyecto", about_contact_sub:"Estamos listos para asesorarte",
    badge:"100%", badge_sub:"Guatemalteco & Comprometido",
    // TEAM
    team_eyebrow:"Las personas detrás", team_title:"Nuestros Gerentes",
    team_desc:"Profesionales especializados comprometidos con brindar soluciones eficientes, éticas y orientadas a resultados.",
    team_quote:'"Profesionalismo, experiencia y compromiso al servicio de nuestros clientes."',
    team_contact_headline:"¿Quieres ser parte de nuestro equipo?", team_contact_sub:"Contáctanos y cuéntanos sobre ti",
    // CATALOGS
    cat_eyebrow:"Recursos descargables", cat_title:"Catálogos",
    cat_desc:"Estos son los catálogos que trabajamos con distintas empresas. Haz clic en cualquiera para descargarlo directamente.",
    cat_badge_title:"Acuerdo de uso", cat_badge_desc:"Al descargar nuestros catálogos, usted acepta que el contenido es de uso referencial.",
    cat_download:"Descargar PDF", cat_soon_title:"Próximamente", cat_soon_desc:"Los catálogos estarán disponibles muy pronto. Contáctanos para recibir información directamente.",
    cat_contact_headline:"¿Necesitas más información?", cat_contact_sub:"Escríbenos y te ayudamos con gusto",
    // FLEET
    fleet_eyebrow:"Logística y distribución", fleet_title:"Empaque y Flotilla",
    fleet_desc:"Nos destacamos por la excelencia en cada entrega, garantizando que los productos lleguen en perfectas condiciones a nuestros clientes con puntualidad, seguridad y compromiso.",
    fleet_pack_title:"Nuestro Empaque",
    fleet_pack_desc:"Contamos con procesos de empaque profesionales que aseguran la integridad de cada producto desde su origen hasta el destino final. Utilizamos materiales de calidad y técnicas especializadas adaptadas a cada tipo de mercancía.",
    fleet_photo_label:"Foto", fleet_photo_pending:"Imagen pendiente",
    fleet_title2:"Nuestra Flotilla",
    fleet_desc2:"Contamos con una flotilla diversificada y en óptimas condiciones para responder a cualquier necesidad de transporte y distribución. Desde entregas express en zonas urbanas hasta abastecimiento de grandes instituciones a nivel nacional, tenemos el vehículo adecuado para cada tipo de carga.",
    fleet_ref:"* Imágenes de referencia",
    fleet_pending:"FOTO PENDIENTE",
    fleet_quote:'"Contamos con la unidad correcta para cada tipo de carga — entregas puntuales, seguras y con el respaldo profesional de Grupo G&M."',
    fleet_contact_headline:"¿Necesitas cotizar un servicio de transporte?", fleet_contact_sub:"Contáctanos y te damos la mejor opción para tu carga",
    // TERMS
    terms_eyebrow:"Documentación legal", terms_title:"Términos y Condiciones",
    terms_desc:"Grupo G&M, Sociedad Anónima — República de Guatemala. Última actualización: 2026.",
    terms_badge_title:"Acuerdo Legal", terms_badge_desc:"Al utilizar los servicios de Grupo G&M, usted acepta estos Términos y Condiciones. Por favor léalos cuidadosamente.",
    terms_footer_name:"Grupo G&M, Sociedad Anónima", terms_footer_sub:"Multiservicios 100% Guatemalteco", terms_footer_tag:"Calidad • Ética • Excelencia Operativa",
    terms_contact_headline:"¿Tienes preguntas sobre nuestros términos?", terms_contact_sub:"Escríbenos y con gusto te orientamos",
    // FOOTER
    footer_slogan:'"Soluciones que suman"',
    footer_copy:"© 2026 Grupo Empresarial G&M. Todos los derechos reservados.",
    // ABOUT extra
    about_stats:[["9+","Servicios"],["100%","Guatemalteco"],["","Amplio equipo de profesionales"],["∞","Compromiso"]],
    about_slogan:'"Soluciones que suman"',
    // FLEET extra
    fleet_photo_num:"Foto",
    fleet_vehicle_labels:[["🛻","4x4 Todo Terreno"],["🚐","Ligero Reparto"],["🚛","Mediano"],["🚚","Interurbana"]],
    fleet_vehicles:[
      { icon:"🛻", name:"Pickup 4x4 Todo Terreno", capacity:"Hasta 1 Tonelada", color:"#0094B6", photoKey:"PICKUP_PHOTO", desc:"Vehículo polivalente de tracción en las cuatro ruedas, diseñado para durabilidad extrema. Ideal para trabajos de campo, transporte de personal en terrenos difíciles y carga de materiales. Su robustez y alto despeje del suelo lo hacen indispensable para la geografía variada de Guatemala. Perfecto para logística rural y supervisión de obras." },
      { icon:"🚐", name:"Camión Ligero de Reparto", capacity:"1 a 1.5 Toneladas", color:"#006E8C", photoKey:"LIGERO_PHOTO", desc:"Unidad compacta de chasis y cabina, optimizada para la maniobrabilidad en calles urbanas estrechas. Ideal para 'última milla' de paquetería, distribución de insumos médicos y comercio local. Su eficiente consumo de combustible y facilidad de estacionamiento lo convierten en el aliado perfecto para entregas rápidas en la ciudad." },
      { icon:"🚛", name:"Camión Mediano", capacity:"2 a 3 Toneladas", color:"#005F7A", photoKey:"MEDIANO_PHOTO", desc:"Vehículo de carga robusto con mayor capacidad volumétrica que los modelos ligeros. Ideal para mudanzas locales, distribución de bienes de consumo masivo y transporte de materiales de construcción ligeros. Equilibrio perfecto entre capacidad de carga, costo operativo y acceso urbano." },
      { icon:"🚚", name:"Camión de Carga Interurbana", capacity:"3.5 a 5.5 Toneladas", color:"#003A4F", photoKey:"INTERURBANO_PHOTO", desc:"Unidad potente con alta capacidad de carga útil para rutas interdepartamentales y de larga distancia. Ideal para el transporte de maquinaria ligera, productos perecederos a granel y logística de gran escala. Su motor de alto torque y chasis reforzado garantizan un desempeño confiable en carreteras montañosas." }
    ],
    // CATALOGS extra
    cat_download_btn:"⬇ Descargar PDF",
    cat_soon_title_label:"Próximamente", cat_soon_desc_label:"Los catálogos estarán disponibles muy pronto. Contáctanos para recibir información directamente.",
    catalogs:[
      { name:"Listado de Productos Varios 2026", company:"Grupo G&M", icon:"📦", desc:"Amplio catálogo de productos varios incluyendo electrodomésticos, artículos de cocina, bocinas, focos LED, ventiladores, estufas, proyectores, cámaras y básculas. Soluciones integrales para el hogar y la empresa.", b64:"", url:"https://drive.google.com/uc?export=download&id=13VXKnJflqwT5tsotXl6gqS5lZk4qcB1t" },
      { name:"Catálogo Productos Gratuidad 2026", company:"Grupo G&M", icon:"🧽", desc:"Catálogo especializado para el Programa de Gratuidad del sector educativo. Incluye productos de limpieza, detergentes, cloro, jabón para manos, papel higiénico, desinfectantes, escobas, esponjas y más artículos de higiene institucional.", b64:"", url:"https://drive.google.com/uc?export=download&id=18VUI_2wcT0fGrWCFrElyG7RJgl3Viw1s" },
      { name:"Catálogo Productos Librería 2026", company:"Grupo G&M", icon:"✏️", desc:"Completo catálogo de papelería y útiles de oficina: archivadores, bolígrafos, cuadernos, calculadoras, cintas, folders, lápices, marcadores, papel, perforadores, reglas, tijeras y mucho más para instituciones educativas y empresas.", b64:"", url:"https://drive.google.com/uc?export=download&id=1_II6NT-6ofWRyKe7EYKA1AXlK6PPwQQP" }
    ],
  },
  en: {
    // NAV
    nav: { home:"Home", services:"Services", about:"About Us", team:"Our Managers", catalogs:"Catalogs", fleet:"Packaging & Fleet", terms:"Terms" },
    // HOME
    home_tag:"Business Group · Guatemala",
    home_title1:"Solutions that", home_title2:"add", home_title3:"value to your company",
    home_desc:"We are a 100% Guatemalan multi-service group, committed to efficiency, ethics and operational excellence in every project.",
    home_btn1:"View Services", home_btn2:"Learn More",
    stats:[["8+","Service Areas"],["100%","Guatemalan"],["","Wide team of professionals"],["∞","Commitment"]],
    contact_headline:"Ready to work together?", contact_sub:"Contact us today",
    // SERVICES
    svc_eyebrow:"What we offer", svc_title:"Our Services",
    svc_desc:"Comprehensive solutions combining technical expertise, strategic support and operational execution, designed to improve efficiency, productivity and sustainability for our clients.",
    svc_contact_headline:"Interested in any of our services?", svc_contact_sub:"Write to us and we will be happy to assist you",
    // ABOUT
    about_eyebrow:"Who we are", about_title:"About Us",
    about_desc:"A 100% Guatemalan multi-service group, made up of professionals with extensive experience across multiple sectors.",
    about_intro:"We are a 100% Guatemalan multi-service group, made up of professionals with extensive experience in financial consulting, pharmaceutical industry, technology, health and institutional food. Our purpose is to offer comprehensive solutions with quality, ethics and operational excellence.",
    tab_mision:"Mission", tab_vision:"Vision", tab_valores:"Values",
    mision_text:"To drive the growth, efficiency and well-being of our clients through comprehensive solutions in consulting, training, technology, health, institutional food and commercial management.",
    vision_text:"To become a leading business group in comprehensive services at a national and regional level, recognized for its technical capacity, reliability, innovation and high quality standard in each of its business units.",
    about_contact_headline:"Let's talk about your next project", about_contact_sub:"We are ready to advise you",
    badge:"100%", badge_sub:"Guatemalan & Committed",
    // TEAM
    team_eyebrow:"The people behind", team_title:"Our Managers",
    team_desc:"Specialized professionals committed to providing efficient, ethical and results-oriented solutions.",
    team_quote:'"Professionalism, experience and commitment at the service of our clients."',
    team_contact_headline:"Want to be part of our team?", team_contact_sub:"Contact us and tell us about yourself",
    // CATALOGS
    cat_eyebrow:"Downloadable resources", cat_title:"Catalogs",
    cat_desc:"These are the catalogs we work with across various companies. Click any of them to download directly.",
    cat_badge_title:"Usage Agreement", cat_badge_desc:"By downloading our catalogs, you agree that the content is for reference use only.",
    cat_download:"Download PDF", cat_soon_title:"Coming Soon", cat_soon_desc:"Catalogs will be available very soon. Contact us to receive information directly.",
    cat_contact_headline:"Need more information?", cat_contact_sub:"Write to us and we will be happy to help",
    // FLEET
    fleet_eyebrow:"Logistics & distribution", fleet_title:"Packaging & Fleet",
    fleet_desc:"We stand out for excellence in every delivery, ensuring products arrive in perfect condition to our clients with punctuality, safety and commitment.",
    fleet_pack_title:"Our Packaging",
    fleet_pack_desc:"We have professional packaging processes that ensure the integrity of each product from origin to final destination. We use quality materials and specialized techniques adapted to each type of merchandise.",
    fleet_photo_label:"Photo", fleet_photo_pending:"Image pending",
    fleet_title2:"Our Fleet",
    fleet_desc2:"We have a diversified fleet in optimal conditions to respond to any transportation and distribution need. From express deliveries in urban areas to supplying large institutions nationwide, we have the right vehicle for each type of cargo.",
    fleet_ref:"* Reference images",
    fleet_pending:"PHOTO PENDING",
    fleet_quote:'"We have the right unit for every type of cargo — punctual, safe deliveries with the professional support of Grupo G&M."',
    fleet_contact_headline:"Need to quote a transportation service?", fleet_contact_sub:"Contact us and we will give you the best option for your cargo",
    // TERMS
    terms_eyebrow:"Legal documentation", terms_title:"Terms & Conditions",
    terms_desc:"Grupo G&M, S.A. — Republic of Guatemala. Last updated: 2026.",
    terms_badge_title:"Legal Agreement", terms_badge_desc:"By using Grupo G&M services, you agree to these Terms. Please read them carefully.",
    terms_footer_name:"Grupo G&M, S.A.", terms_footer_sub:"100% Guatemalan Multi-Service Group", terms_footer_tag:"Quality • Ethics • Operational Excellence",
    terms_contact_headline:"Questions about our terms?", terms_contact_sub:"Write to us and we will be happy to guide you",
    // FOOTER
    footer_slogan:'"Solutions that add up"',
    footer_copy:"© 2026 Grupo Empresarial G&M. All rights reserved.",
    // ABOUT extra
    about_stats:[["9+","Services"],["100%","Guatemalan"],["","Wide team of professionals"],["∞","Commitment"]],
    about_slogan:'"Solutions that add up"',
    // FLEET extra
    fleet_photo_num:"Photo",
    fleet_vehicle_labels:[["🛻","4x4 Off-Road"],["🚐","Light Delivery"],["🚛","Medium"],["🚚","Intercity"]],
    fleet_vehicles:[
      { icon:"🛻", name:"4x4 All-Terrain Pickup", capacity:"Up to 1 Ton", color:"#0094B6", photoKey:"PICKUP_PHOTO", desc:"Versatile four-wheel-drive vehicle designed for extreme durability. Ideal for field work, personnel transport in difficult terrain and material loading. Its robustness and high ground clearance make it indispensable for Guatemala's varied geography. Perfect for rural logistics and site supervision." },
      { icon:"🚐", name:"Light Delivery Truck", capacity:"1 to 1.5 Tons", color:"#006E8C", photoKey:"LIGERO_PHOTO", desc:"Compact chassis-cab unit optimized for maneuverability in narrow urban streets. Ideal for last-mile parcel delivery, medical supplies distribution and local commerce. Its fuel efficiency and ease of parking make it the perfect partner for fast city deliveries." },
      { icon:"🚛", name:"Medium Truck", capacity:"2 to 3 Tons", color:"#005F7A", photoKey:"MEDIANO_PHOTO", desc:"Robust cargo vehicle with greater volumetric capacity than light models. Ideal for local moves, mass consumer goods distribution and light construction materials transport. The perfect balance of load capacity, operating cost and urban access." },
      { icon:"🚚", name:"Intercity Cargo Truck", capacity:"3.5 to 5.5 Tons", color:"#003A4F", photoKey:"INTERURBANO_PHOTO", desc:"Powerful unit with high payload capacity for inter-departmental and long-distance routes. Ideal for light machinery transport, bulk perishable goods and large-scale logistics. Its high-torque engine and reinforced chassis ensure reliable performance on mountain roads." }
    ],
    // CATALOGS extra
    cat_download_btn:"⬇ Download PDF",
    cat_soon_title_label:"Coming Soon", cat_soon_desc_label:"Catalogs will be available very soon. Contact us to receive information directly.",
    catalogs:[
      { name:"Various Products List 2026", company:"Grupo G&M", icon:"📦", desc:"Wide catalog of various products including appliances, kitchen items, speakers, LED bulbs, fans, stoves, projectors, cameras and scales. Comprehensive solutions for home and business.", b64:"", url:"https://drive.google.com/uc?export=download&id=13VXKnJflqwT5tsotXl6gqS5lZk4qcB1t" },
      { name:"Gratuity Products Catalog 2026", company:"Grupo G&M", icon:"🧽", desc:"Specialized catalog for the Educational Gratuity Program. Includes cleaning products, detergents, bleach, hand soap, toilet paper, disinfectants, brooms, sponges and more institutional hygiene items.", b64:"", url:"https://drive.google.com/uc?export=download&id=18VUI_2wcT0fGrWCFrElyG7RJgl3Viw1s" },
      { name:"Stationery Products Catalog 2026", company:"Grupo G&M", icon:"✏️", desc:"Complete catalog of stationery and office supplies: binders, pens, notebooks, calculators, tapes, folders, pencils, markers, paper, hole punches, rulers, scissors and much more for educational institutions and businesses.", b64:"", url:"https://drive.google.com/uc?export=download&id=1_II6NT-6ofWRyKe7EYKA1AXlK6PPwQQP" }
    ],
  }
};

function ContactBanner({ headline, sub, lang }) {
  return (
    <div style={{background:"linear-gradient(90deg,#006E8C,#0094B6)",padding:"32px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
      <div>
        <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:22,fontWeight:700,color:"white",marginBottom:4}}>{headline}</div>
        <div style={{fontSize:15,color:"rgba(255,255,255,0.75)"}}>{sub}</div>
      </div>
      <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
        {[["✉","grupoempresarialgym@outlook.com"],["📞","(502) 5124-1957"]].map(([ic,tx])=>(
          <div key={tx} style={{display:"flex",alignItems:"center",gap:10,color:"white",fontSize:14,fontWeight:500}}>
            <div style={{width:36,height:36,background:"rgba(255,255,255,0.15)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>{ic}</div>
            {tx}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ nav, lang }) {
  const t = T[lang];
  const links = [{id:"home",label:t.nav.home},{id:"services",label:t.nav.services},{id:"about",label:t.nav.about},{id:"team",label:t.nav.team},{id:"catalogs",label:t.nav.catalogs},{id:"fleet",label:t.nav.fleet},{id:"terms",label:t.nav.terms}];
  return (
    <footer style={{background:"#002535",color:"white",padding:"48px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:24}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
        <img src={LOGO} alt="G&M" style={{height:60,objectFit:"contain",filter:"brightness(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}}/>
        <div style={{fontSize:12,color:"rgba(255,255,255,0.35)",marginTop:6}}>{t.footer_slogan}</div>
      </div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
        {links.map(l=>(
          <button key={l.id} onClick={()=>nav(l.id)} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.5)",fontSize:14,padding:"6px 14px",borderRadius:100,cursor:"pointer",fontFamily:"inherit",transition:"color .2s"}}>
            {l.label}
          </button>
        ))}
      </div>
      <div>
        <a href="mailto:grupoempresarialgym@outlook.com" style={{display:"block",color:"#7FD4E8",textDecoration:"none",fontSize:14,fontWeight:500,marginBottom:4}}>grupoempresarialgym@outlook.com</a>
        <a href="tel:+50251241957" style={{display:"block",color:"#7FD4E8",textDecoration:"none",fontSize:14,fontWeight:500}}>(502) 5124-1957</a>
      </div>
      <div style={{width:"100%",textAlign:"center",fontSize:12,color:"rgba(255,255,255,0.2)",paddingTop:24,borderTop:"1px solid rgba(255,255,255,0.07)"}}>
        {t.footer_copy}
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, desc, lang }) {
  return (
    <div style={{textAlign:"center",padding:"72px 48px 48px"}}>
      <p style={{fontSize:12,fontWeight:600,letterSpacing:"4px",textTransform:"uppercase",color:"#0094B6",marginBottom:16}}>{eyebrow}</p>
      <h2 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"clamp(30px,4vw,46px)",fontWeight:700,color:"#003A4F",marginBottom:16}}>{title}</h2>
      <p style={{fontSize:16,color:"#6B7280",maxWidth:640,margin:"0 auto",lineHeight:1.75,fontWeight:300}}>{desc}</p>
      <div style={{width:60,height:3,background:"linear-gradient(90deg,#0094B6,#7FD4E8)",margin:"20px auto 0",borderRadius:2}}/>
    </div>
  );
}

// ── Pages ────────────────────────────────────────────────────────
function HomePage({ nav, lang }) {
  const t = T[lang];
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#002535 0%,#006E8C 55%,#0094B6 100%)",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"}}>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(127,212,232,0.18) 0%,transparent 70%)",top:-200,right:-200,pointerEvents:"none"}}/>
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:28,padding:"100px 48px 60px",position:"relative",zIndex:2,textAlign:"center"}}>
        <div style={{animation:"float 4s ease-in-out infinite"}}>
          <img src={LOGO} alt="Grupo G&M" style={{width:180,height:180,objectFit:"contain",filter:"drop-shadow(0 12px 40px rgba(0,0,0,0.45))brightness(1.1)"}}/>
        </div>
        <p style={{fontSize:12,fontWeight:600,letterSpacing:"4px",textTransform:"uppercase",color:"#7FD4E8"}}>{t.home_tag}</p>
        <h1 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"clamp(36px,5.5vw,68px)",fontWeight:700,color:"white",lineHeight:1.1,maxWidth:680}}>
          {t.home_title1} <em style={{color:"#7FD4E8",fontStyle:"italic"}}>{t.home_title2}</em> {t.home_title3}
        </h1>
        <p style={{fontSize:17,color:"rgba(255,255,255,0.7)",maxWidth:500,lineHeight:1.75,fontWeight:300}}>
          {t.home_desc}
        </p>
        <div style={{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",marginTop:8}}>
          <button onClick={()=>nav("services")} style={{background:"white",color:"#006E8C",padding:"14px 34px",borderRadius:100,fontSize:15,fontWeight:600,cursor:"pointer",border:"none",boxShadow:"0 4px 20px rgba(0,0,0,0.25)",fontFamily:"inherit"}}>{t.home_btn1}</button>
          <button onClick={()=>nav("about")} style={{background:"transparent",color:"white",padding:"14px 34px",borderRadius:100,fontSize:15,fontWeight:500,cursor:"pointer",border:"1.5px solid rgba(255,255,255,0.4)",fontFamily:"inherit"}}>{t.home_btn2}</button>
        </div>
      </div>
      <div style={{display:"flex",background:"rgba(0,0,0,0.25)",backdropFilter:"blur(10px)",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:2}}>
        {t.stats.map(([n,l],i)=>(
          <div key={i} style={{flex:1,padding:"24px 16px",textAlign:"center",borderRight:i<3?"1px solid rgba(255,255,255,0.08)":"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            {n && <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:28,fontWeight:700,color:"#7FD4E8",marginBottom:4}}>{n}</div>}
            <div style={{fontSize:i===2?13:11,color:i===2?"#7FD4E8":"rgba(255,255,255,0.5)",letterSpacing:"1px",textTransform:"uppercase",lineHeight:1.45,fontWeight:i===2?600:400}}>{l}</div>
          </div>
        ))}
      </div>
      <ContactBanner headline={t.contact_headline} sub={t.contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

function ServicesPage({ nav, lang }) {
  const t = T[lang];
  const SERVICES = SERVICES_DATA[lang];
  return (
    <div style={{background:"#F4FBFD",minHeight:"100vh"}}>
      <SectionHeader eyebrow={t.svc_eyebrow} title={t.svc_title} desc={t.svc_desc}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:28,padding:"0 48px 80px",maxWidth:1400,margin:"0 auto"}}>
        {SERVICES.map((s,i)=>(
          <div key={i} style={{background:"white",borderRadius:20,overflow:"hidden",boxShadow:"0 2px 16px rgba(0,58,79,0.07)",border:"1px solid rgba(0,110,140,0.06)",transition:"transform .3s,box-shadow .3s",cursor:"default"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(0,110,140,0.16)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 16px rgba(0,58,79,0.07)"}}>
            <img src={s.img} alt={s.title} style={{width:"100%",height:200,objectFit:"cover",display:"block"}} onError={e=>e.target.style.display="none"}/>
            <div style={{padding:"24px 26px 28px"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                <div style={{width:42,height:42,background:"linear-gradient(135deg,#C8EEF7,#7FD4E8)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{s.icon}</div>
                <h3 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:17,fontWeight:600,color:"#003A4F",lineHeight:1.3}}>{s.title}</h3>
              </div>
              <p style={{fontSize:14,color:"#6B7280",lineHeight:1.75}}>{s.desc}</p>
              <span style={{display:"inline-block",background:"#C8EEF7",color:"#006E8C",fontSize:11,fontWeight:600,letterSpacing:"1px",padding:"4px 12px",borderRadius:100,textTransform:"uppercase",marginTop:16}}>{s.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <ContactBanner headline={t.svc_contact_headline} sub={t.svc_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

function AboutPage({ nav, lang }) {
  const [tab,setTab] = useState("mision");
  const t = T[lang];
  return (
    <div style={{background:"white",minHeight:"100vh"}}>
      <SectionHeader eyebrow={t.about_eyebrow} title={t.about_title} desc={t.about_desc}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,maxWidth:1200,margin:"0 auto",padding:"0 48px 80px",alignItems:"start"}}>
        <div style={{position:"relative"}}>
          <div style={{borderRadius:20,overflow:"hidden",height:420,background:"linear-gradient(135deg,#003A4F 0%,#006E8C 50%,#0094B6 100%)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
              <defs>
                <radialGradient id="rga" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="rgba(127,212,232,0.22)"/>
                  <stop offset="100%" stopColor="rgba(0,58,79,0)"/>
                </radialGradient>
              </defs>
              <rect width="420" height="420" fill="url(#rga)"/>
              {[1,2,3,4,5].map(i=><line key={"h"+i} x1={0} y1={70*i} x2={420} y2={70*i} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
              {[1,2,3,4,5].map(i=><line key={"v"+i} x1={70*i} y1={0} x2={70*i} y2={420} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
              <circle cx="210" cy="175" r="125" fill="none" stroke="rgba(127,212,232,0.14)" strokeWidth="1.5"/>
              <circle cx="210" cy="175" r="80" fill="none" stroke="rgba(127,212,232,0.09)" strokeWidth="1"/>
              <circle cx="210" cy="175" r="42" fill="rgba(255,255,255,0.05)" stroke="rgba(127,212,232,0.2)" strokeWidth="1"/>
              <circle cx="72" cy="72" r="5" fill="rgba(127,212,232,0.45)"/>
              <circle cx="348" cy="90" r="4" fill="rgba(127,212,232,0.38)"/>
              <circle cx="52" cy="335" r="6" fill="rgba(0,196,232,0.28)"/>
              <circle cx="368" cy="315" r="4" fill="rgba(127,212,232,0.32)"/>
              <circle cx="142" cy="378" r="3" fill="rgba(255,255,255,0.18)"/>
              <circle cx="288" cy="42" r="4" fill="rgba(255,255,255,0.14)"/>
            </svg>
            <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",padding:"28px"}}>
              <div style={{textAlign:"center",marginBottom:28}}>
                <div style={{fontFamily:"League Spartan,Arial,sans-serif",fontSize:40,fontWeight:800,color:"white",lineHeight:1,letterSpacing:"-1px"}}>G&amp;M</div>
                <div style={{fontFamily:"League Spartan,Arial,sans-serif",fontSize:9,color:"rgba(127,212,232,0.8)",letterSpacing:"4px",marginTop:4,fontWeight:500}}>GRUPO EMPRESARIAL</div>
                <div style={{marginTop:10,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(127,212,232,0.25)",borderRadius:20,padding:"5px 18px",display:"inline-block"}}>
                  <span style={{fontFamily:"Arial,sans-serif",fontSize:11,color:"rgba(127,212,232,0.85)",letterSpacing:"3px"}}>GUATEMALA</span>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%"}}>
                {t.about_stats.map(([n,l])=>(
                  <div key={l} style={{background:"rgba(255,255,255,0.09)",backdropFilter:"blur(8px)",border:"1px solid rgba(127,212,232,0.18)",borderRadius:12,padding:"14px 10px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    {n && <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:22,fontWeight:700,color:"#7FD4E8",marginBottom:3}}>{n}</div>}
                    <div style={{fontSize:n?10:11,color:"#7FD4E8",marginTop:n?3:0,letterSpacing:"0.5px",textTransform:"uppercase",lineHeight:1.45,fontWeight:n?400:600}}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:16,fontSize:12,fontStyle:"italic",color:"rgba(127,212,232,0.6)",fontFamily:"Georgia,serif",textAlign:"center"}}>{t.about_slogan}</div>
            </div>
          </div>
        </div>
        <div>
          <p style={{fontSize:15,color:"#6B7280",lineHeight:1.85,marginBottom:36,fontWeight:300}}>{t.about_intro}</p>
          <div style={{display:"flex",gap:4,marginBottom:20,background:"#F4FBFD",borderRadius:12,padding:4}}>
            {[[`mision`,t.tab_mision],[`vision`,t.tab_vision],[`valores`,t.tab_valores]].map(([id,label])=>(
              <button key={id} onClick={()=>setTab(id)} style={{flex:1,padding:10,borderRadius:10,border:"none",background:tab===id?"white":"transparent",fontFamily:"inherit",fontSize:13,fontWeight:600,color:tab===id?"#006E8C":"#6B7280",cursor:"pointer",boxShadow:tab===id?"0 2px 8px rgba(0,58,79,0.1)":"none",transition:"all .25s"}}>{label}</button>
            ))}
          </div>
          {tab==="mision" && <p style={{fontSize:15,color:"#1A2E38",lineHeight:1.85,padding:20,background:"#F4FBFD",borderRadius:12,borderLeft:"3px solid #0094B6"}}>{t.mision_text}</p>}
          {tab==="vision"  && <p style={{fontSize:15,color:"#1A2E38",lineHeight:1.85,padding:20,background:"#F4FBFD",borderRadius:12,borderLeft:"3px solid #0094B6"}}>{t.vision_text}</p>}
          {tab==="valores" && (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {VALUES_DATA[lang].map(v=>(
                <div key={v} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",background:"#F4FBFD",borderRadius:10,fontSize:14,fontWeight:500,color:"#003A4F"}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:"#0094B6",flexShrink:0}}/>
                  {v}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ContactBanner headline={t.about_contact_headline} sub={t.about_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

function TeamPage({ nav, lang }) {
  const t = T[lang];
  const TEAM = TEAM_DATA[lang];
  return (
    <div style={{background:"#F4FBFD",minHeight:"100vh"}}>
      <SectionHeader eyebrow={t.team_eyebrow} title={t.team_title} desc={t.team_desc}/>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:28,padding:"0 48px 60px",maxWidth:1200,margin:"0 auto"}}>
        {TEAM.map((m,i)=>(
          <div key={i} style={{background:"white",borderRadius:20,padding:"32px 24px",textAlign:"center",width:200,boxShadow:"0 2px 16px rgba(0,58,79,0.07)",border:"1px solid rgba(0,110,140,0.06)",transition:"transform .3s,box-shadow .3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(0,110,140,0.14)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 16px rgba(0,58,79,0.07)"}}>
            {m.photo
              ? <img src={m.photo} alt={m.name} style={{width:80,height:80,borderRadius:"50%",margin:"0 auto 16px",objectFit:"cover",objectPosition:"center center",boxShadow:"0 4px 16px rgba(0,148,182,0.3)",display:"block"}}/>
              : <div style={{width:80,height:80,borderRadius:"50%",margin:"0 auto 16px",background:`linear-gradient(135deg,${m.grad})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Playfair Display,Georgia,serif",fontSize:24,fontWeight:700,color:"white",boxShadow:"0 4px 16px rgba(0,148,182,0.3)"}}>{m.initials}</div>
            }
            <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:16,fontWeight:600,color:"#003A4F",marginBottom:6}}>{m.name}</div>
            <div style={{fontSize:13,color:"#0094B6",fontWeight:500}}>{m.role}</div>
          </div>
        ))}
      </div>
      <div style={{background:"linear-gradient(135deg,#003A4F,#006E8C)",borderRadius:20,padding:48,margin:"0 48px 60px",textAlign:"center",maxWidth:1104,marginLeft:"auto",marginRight:"auto"}}>
        <p style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:"clamp(18px,2.5vw,26px)",fontStyle:"italic",color:"#7FD4E8",lineHeight:1.55}}>
          {t.team_quote}
        </p>
      </div>
      <ContactBanner headline={t.team_contact_headline} sub={t.team_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

function TermsPage({ nav, lang }) {
  const t = T[lang];
  const TERMS = TERMS_DATA[lang];
  const [open,setOpen] = useState(null);
  return (
    <div style={{background:"white",minHeight:"100vh"}}>
      <SectionHeader eyebrow={t.terms_eyebrow} title={t.terms_title} desc={t.terms_desc}/>

      <div style={{maxWidth:900,margin:"0 auto",padding:"0 48px 80px"}}>
        {/* Intro badge */}
        <div style={{background:"linear-gradient(135deg,#003A4F,#006E8C)",borderRadius:16,padding:"24px 32px",marginBottom:40,display:"flex",alignItems:"center",gap:20}}>
          <div style={{fontSize:36}}>📋</div>
          <div>
            <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:18,fontWeight:700,color:"white",marginBottom:4}}>{t.terms_badge_title}</div>
            <div style={{fontSize:14,color:"rgba(255,255,255,0.75)",lineHeight:1.6}}>{t.terms_badge_desc}</div>
          </div>
        </div>

        {/* Accordion */}
        {TERMS.map((section,i)=>(
          <div key={i} style={{marginBottom:12,borderRadius:14,overflow:"hidden",border:"1px solid rgba(0,110,140,0.12)",boxShadow:"0 2px 8px rgba(0,58,79,0.05)"}}>
            <button onClick={()=>setOpen(open===i?null:i)}
              style={{width:"100%",background:open===i?"#006E8C":"white",border:"none",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",transition:"background .25s"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:open===i?"rgba(255,255,255,0.2)":"#C8EEF7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:open===i?"white":"#006E8C",flexShrink:0}}>{section.num}</div>
                <span style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:16,fontWeight:600,color:open===i?"white":"#003A4F",textAlign:"left"}}>{section.title}</span>
              </div>
              <span style={{fontSize:18,color:open===i?"white":"#0094B6",transform:open===i?"rotate(45deg)":"none",transition:"transform .25s",display:"inline-block"}}> + </span>
            </button>
            {open===i && (
              <div style={{padding:"24px",background:"#F8FDFF",borderTop:"1px solid rgba(0,110,140,0.08)"}}>
                {section.content && <p style={{fontSize:14,color:"#1A2E38",lineHeight:1.8,marginBottom:section.items.length?16:0}}>{section.content}</p>}
                {section.items.length>0 && (
                  <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10}}>
                    {section.items.map((item,j)=>(
                      <li key={j} style={{display:"flex",gap:10,alignItems:"flex-start",padding:"10px 14px",background:"white",borderRadius:10,fontSize:14,color:"#374151",lineHeight:1.7,border:"1px solid rgba(0,110,140,0.06)"}}>
                        <div style={{width:6,height:6,borderRadius:"50%",background:"#0094B6",marginTop:7,flexShrink:0}}/>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Footer note */}
        <div style={{marginTop:40,padding:"24px",background:"#F4FBFD",borderRadius:14,borderLeft:"4px solid #0094B6",textAlign:"center"}}>
          <p style={{fontSize:13,color:"#6B7280",lineHeight:1.7}}>
            <strong style={{color:"#003A4F"}}>{t.terms_footer_name}</strong><br/>
            {t.terms_footer_sub}<br/>
            <em>{t.terms_footer_tag}</em>
          </p>
        </div>
      </div>

      <ContactBanner headline={t.terms_contact_headline} sub={t.terms_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────

function CatalogsPage({ nav, lang }) {
  const t = T[lang];
  const CATALOGS = t.catalogs;

  return (
    <div style={{background:"#F4FBFD",minHeight:"80vh"}}>
      <SectionHeader eyebrow={t.cat_eyebrow} title={t.cat_title} desc={t.cat_desc}/>

      {CATALOGS.length === 0 ? (
        <div style={{maxWidth:800,margin:"0 auto",padding:"0 40px 80px",textAlign:"center"}}>
          <div style={{background:"white",borderRadius:20,padding:"60px 40px",boxShadow:"0 2px 16px rgba(0,58,79,0.07)",border:"1px solid rgba(0,110,140,0.08)"}}>
            <div style={{fontSize:48,marginBottom:20}}>📂</div>
            <p style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:20,fontWeight:600,color:"#003A4F",marginBottom:12}}>{t.cat_soon_title_label}</p>
            <p style={{fontSize:15,color:"#6B7280",lineHeight:1.7}}>{t.cat_soon_desc_label}</p>
          </div>
        </div>
      ) : (
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24,padding:"0 48px 80px",maxWidth:1300,margin:"0 auto"}}>
          {CATALOGS.map((cat,i)=>(
            <div key={i} style={{background:"white",borderRadius:20,padding:"28px 24px",boxShadow:"0 2px 16px rgba(0,58,79,0.07)",border:"1px solid rgba(0,110,140,0.08)",display:"flex",flexDirection:"column",gap:14,transition:"transform .3s,box-shadow .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(0,110,140,0.14)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 16px rgba(0,58,79,0.07)"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <div style={{width:50,height:50,background:"linear-gradient(135deg,#C8EEF7,#7FD4E8)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{cat.icon}</div>
                <div>
                  <div style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:16,fontWeight:600,color:"#003A4F",lineHeight:1.3}}>{cat.name}</div>
                  <div style={{fontSize:12,color:"#0094B6",fontWeight:500,marginTop:3}}>{cat.company}</div>
                </div>
              </div>
              <p style={{fontSize:13,color:"#6B7280",lineHeight:1.7,flex:1}}>{cat.desc}</p>
              <a
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,background:"linear-gradient(90deg,#006E8C,#0094B6)",color:"white",padding:"12px 20px",borderRadius:100,fontSize:14,fontWeight:600,textDecoration:"none",textAlign:"center",transition:"opacity .2s"}}
                onMouseEnter={e=>e.currentTarget.style.opacity=".85"}
                onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                {t.cat_download_btn}
              </a>
            </div>
          ))}
        </div>
      )}

      <ContactBanner headline={t.cat_contact_headline} sub={t.cat_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

function FleetPage({ nav, lang }) {
  const t = T[lang];
  const PHOTOS_EMPAQUE = [null, null, null];
  const photoMap = { PICKUP_PHOTO, LIGERO_PHOTO, MEDIANO_PHOTO, INTERURBANO_PHOTO };

  return (
    <div style={{background:"#F4FBFD", minHeight:"80vh"}}>
      <SectionHeader eyebrow={t.fleet_eyebrow} title={t.fleet_title} desc={t.fleet_desc}/>

      {/* EMPAQUE SECTION */}
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 48px 60px"}}>
        <div style={{marginBottom:40}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
            <div style={{width:4,height:32,background:"linear-gradient(180deg,#0094B6,#7FD4E8)",borderRadius:2}}/>
            <h3 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:26,fontWeight:700,color:"#003A4F"}}>{t.fleet_pack_title}</h3>
          </div>
          <p style={{fontSize:15,color:"#6B7280",lineHeight:1.8,maxWidth:700,marginLeft:16}}>
            {t.fleet_pack_desc}
          </p>
        </div>

        {/* Photo placeholders */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:64}}>
          {PHOTOS_EMPAQUE.map((_,i)=>(
            <div key={i} style={{background:"white",borderRadius:16,height:220,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,border:"2px dashed rgba(0,148,182,0.3)",boxShadow:"0 2px 12px rgba(0,58,79,0.05)"}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"linear-gradient(135deg,#C8EEF7,#7FD4E8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>📷</div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:13,fontWeight:600,color:"#003A4F"}}>{t.fleet_photo_num} {i+1}</div>
                <div style={{fontSize:11,color:"#9CA3AF",marginTop:2}}>{t.fleet_photo_pending}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FLOTILLA SECTION */}
        <div style={{marginBottom:36}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
            <div style={{width:4,height:32,background:"linear-gradient(180deg,#0094B6,#7FD4E8)",borderRadius:2}}/>
            <h3 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:26,fontWeight:700,color:"#003A4F"}}>{t.fleet_title2}</h3>
          </div>
          <p style={{fontSize:15,color:"#6B7280",lineHeight:1.8,maxWidth:700,marginLeft:16}}>
            {t.fleet_desc2}
          </p>
        </div>

        {/* Fleet cards */}
        <div style={{fontSize:12,color:"#9CA3AF",fontStyle:"italic",marginBottom:10,textAlign:"right"}}>{t.fleet_ref}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:22}}>
          {t.fleet_vehicles.map((v,i)=>{
            const photo = photoMap[v.photoKey] || null;
            return (
              <div key={i} style={{background:"white",borderRadius:18,overflow:"hidden",boxShadow:"0 2px 14px rgba(0,58,79,0.07)",border:"1px solid rgba(0,110,140,0.07)",transition:"transform .3s,box-shadow .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(0,110,140,0.14)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 2px 14px rgba(0,58,79,0.07)"}}>
                {photo
                  ? <img src={photo} alt={v.name} style={{width:"100%",height:150,objectFit:"cover",display:"block"}}/>
                  : <div style={{height:150,background:`linear-gradient(135deg,${v.color}dd,${v.color}88)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,position:"relative"}}>
                      <div style={{fontSize:48}}>{v.icon}</div>
                      <div style={{position:"absolute",top:10,right:10,background:"rgba(255,255,255,0.15)",borderRadius:8,padding:"3px 10px",fontSize:10,color:"white",fontWeight:600,letterSpacing:"0.5px"}}>{t.fleet_pending}</div>
                    </div>
                }
                <div style={{padding:"20px 22px 24px"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                    <h4 style={{fontFamily:"Playfair Display,Georgia,serif",fontSize:16,fontWeight:600,color:"#003A4F",lineHeight:1.3}}>{v.name}</h4>
                  </div>
                  <div style={{display:"inline-block",background:"#C8EEF7",color:"#006E8C",fontSize:11,fontWeight:600,padding:"3px 10px",borderRadius:100,marginBottom:12,letterSpacing:"0.5px"}}>
                    {v.capacity}
                  </div>
                  <p style={{fontSize:13,color:"#6B7280",lineHeight:1.75}}>{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{marginTop:40,background:"linear-gradient(135deg,#003A4F,#006E8C)",borderRadius:16,padding:"32px 40px",textAlign:"center"}}>
          <p style={{fontFamily:"League Spartan,Arial,sans-serif",fontSize:"clamp(15px,2vw,20px)",fontWeight:600,color:"#7FD4E8",lineHeight:1.6,marginBottom:16}}>
            {t.fleet_quote}
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap"}}>
            {t.fleet_vehicle_labels.map(([ic,lb])=>(
              <div key={lb} style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,0.75)",fontSize:13}}>
                <span style={{fontSize:18}}>{ic}</span>{lb}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactBanner headline={t.fleet_contact_headline} sub={t.fleet_contact_sub}/>
      <Footer nav={nav} lang={lang}/>
    </div>
  );
}

export default function App() {
  const [page,setPage] = useState("home");
  const [lang,setLang] = useState("es");
  const nav = (p) => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}); };
  const t = T[lang]; const pages = t.nav;

  return (
    <div style={{fontFamily:"DM Sans,system-ui,sans-serif"}}>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(0,110,140,0.12)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:72,boxShadow:"0 2px 24px rgba(0,110,140,0.08)"}}>
        {/* Logo */}
        <div onClick={()=>nav("home")} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",flexShrink:0}}>
          <img src={LOGO} alt="Grupo G&M" style={{height:54,width:"auto",objectFit:"contain"}}/>
        </div>
        {/* Nav links - centered */}
        <div style={{display:"flex",gap:2,flex:1,justifyContent:"center"}}>
          {Object.entries(pages).map(([id,label])=>(
            <button key={id} onClick={()=>nav(id)} style={{background:page===id?"#0094B6":"transparent",color:page===id?"white":"#6B7280",border:"none",padding:"8px 14px",borderRadius:100,fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"inherit",transition:"all .25s",whiteSpace:"nowrap"}}>{label}</button>
          ))}
        </div>
        {/* Lang selector - fixed width so it never shifts */}
        <div style={{flexShrink:0,display:"flex",gap:4,background:"#F4FBFD",borderRadius:100,padding:"3px 4px",border:"1px solid rgba(0,110,140,0.15)"}}>
          <button onClick={()=>setLang("es")} style={{background:lang==="es"?"#0094B6":"transparent",color:lang==="es"?"white":"#6B7280",border:"none",padding:"5px 12px",borderRadius:100,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all .2s",width:60}}>🇬🇹 ES</button>
          <button onClick={()=>setLang("en")} style={{background:lang==="en"?"#0094B6":"transparent",color:lang==="en"?"white":"#6B7280",border:"none",padding:"5px 12px",borderRadius:100,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all .2s",width:60}}>🇺🇸 EN</button>
        </div>
      </nav>

      <div style={{paddingTop:72}}>
        {page==="home"     && <HomePage     nav={nav} lang={lang}/>}
        {page==="services" && <ServicesPage nav={nav} lang={lang}/>}
        {page==="about"    && <AboutPage    nav={nav} lang={lang}/>}
        {page==="team"     && <TeamPage     nav={nav} lang={lang}/>}
        {page==="terms"    && <TermsPage    nav={nav} lang={lang}/>}
        {page==="catalogs" && <CatalogsPage nav={nav} lang={lang}/>}
        {page==="fleet"    && <FleetPage    nav={nav} lang={lang}/>}
      </div>
    </div>
  );
}
