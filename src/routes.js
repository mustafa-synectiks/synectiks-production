const path = require("path")
module.exports = [
  {
    path: "/",
    component: path.resolve(`src/pages/index.js`),
  },
  {
    path: "/audit/index.html",
    component: path.resolve(`src/pages/Formation/Audit.js`),
  },
  {
    path: "/devops/index.html",
    component: path.resolve(`src/pages/Formation/Devops.js`),
  },
  {
    path: "/foundation/index.html",
    component: path.resolve(`src/pages/Formation/Foundation.js`),
  },
  {
    path: "/microservices/index.html",
    component: path.resolve(`src/pages/Formation/Microservices.js`),
  },
  {
    path: "/microserviceexample/index.html",
    component: path.resolve(`src/pages/Formation/Microserviceexample.js`),
  },
  {
    path: "/microservicehelp/index.html",
    component: path.resolve(`src/pages/Formation/Microservicehelp.js`),
  },
  {
    path: "/privacypolicy/index.html",
    component: path.resolve(`src/pages/Mails/privacypolicy.js`),
  },
  {
    path: "/microservicechallenge/index.html",
    component: path.resolve(`src/pages/Formation/Microservicechallenge.js`),
  },
  {
    path: "/microservicebenefit/index.html",
    component: path.resolve(`src/pages/Formation/Microservicebenefit.js`),
  },
  {
    path: "/transformation/index.html",
    component: path.resolve(`src/pages/Formation/Transformation.js`),
  },
  {
    path: "/operations/index.html",
    component: path.resolve(`src/pages/Formation/Operations.js`),
  },
  {
    path: "/migrations/index.html",
    component: path.resolve(`src/pages/Formation/Migrations.js`),
  },
  {
    path: "/HostedInfrastructure/index.html",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/HostedInfrastructure.js`
    ),
  },
  {
    path: "/CloudManagedBackup/index.html",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/CloudManagedBackup.js`
    ),
  },
  {
    path: "/CloudDisasterRecovery/index.html",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/CloudDisasterRecovery.js`
    ),
  },
  {
    path: "/privatecloud/index.html",
    component: path.resolve(`src/pages/Cloud/Privatecloud.js`),
  },
  {
    path: "/hybridcloud/index.html",
    component: path.resolve(`src/pages/Cloud/Hybridcloud.js`),
  },
  {
    path: "/publiccloud/index.html",
    component: path.resolve(`src/pages/Cloud/Publiccloud.js`),
  },
  {
    path: "/colocation/index.html",
    component: path.resolve(`src/pages/Cloud/Colocation.js`),
  },
  {
    path: "/applicationservices/index.html",
    component: path.resolve(`src/pages/Services/Applicationservices.js`),
  },
  {
    path: "/managedservices/index.html",
    component: path.resolve(`src/pages/Services/Managedservices.js`),
  },
  {
    path: "/networkservices/index.html",
    component: path.resolve(`src/pages/Services/Networkservices.js`),
  },
  {
    path: "/casestudy/index.html",
    component: path.resolve(`src/pages/Resources/Casestudy.js`),
  },
  {
    path: "/featured/index.html",
    component: path.resolve(`src/pages/Resources/Featured.js`),
  },
  {
    path: "/about/index.html",
    component: path.resolve(`src/pages/Company/Aboutus.js`),
  },
  {
    path: "/careers/index.html",
    component: path.resolve(`src/pages/Company/Careers.js`),
  },
  {
    path: "/askfordemo/index.html",
    component: path.resolve(`src/pages/Mails/Askdemo.js`),
  },
  {
    path: "/contactus/index.html",
    component: path.resolve(`src/pages/Mails/Contact.js`),
  },
  {
    path: "/realtime/index.html",
    component: path.resolve(`src/pages/CaseStudies/Realtime.js`),
  },
  {
    path: "/networkdesign/index.html",
    component: path.resolve(`src/pages/CaseStudies/Networkdesign.js`),
  },
  {
    path: "/disasterrecovery/index.html",
    component: path.resolve(`src/pages/CaseStudies/Disasterrecovery.js`),
  },
  {
    path: "/storagetier/index.html",
    component: path.resolve(`src/pages/CaseStudies/Storagetier.js`),
  },
  {
    path: "/storagemigration/index.html",
    component: path.resolve(`src/pages/CaseStudies/Storagemigration.js`),
  },
  {
    path: "/softwaredefined/index.html",
    component: path.resolve(`src/pages/CaseStudies/Softwaredefined.js`),
  },
  {
    path: "/VsForm/index.html",
    component: path.resolve(`src/pages/Mails/VisualForm.js`),
  },
]
