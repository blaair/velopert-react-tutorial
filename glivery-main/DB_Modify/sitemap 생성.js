const admin = require('firebase-admin');
const serviceAccount = require('key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://glivery.firebaseio.com',
});
const db = admin.firestore();

const fs = require("fs");
const fetch = require("node-fetch");
const prettier = require("prettier");
const { kill } = require('process');

const getDate = new Date().toISOString();
const GLIVERY_DOMAIN = "glivery.co.kr";

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
    //   const fetchPosts = await fetch(fetchUrl)
    //     .then(res => res.json())
    //     .catch(err => console.log(err));

    const sanpshot = await db.collection('users').get();
    const subdomainList = []

    sanpshot.forEach((doc) => {
        if ( doc.data().subdomain !== undefined )
            subdomainList.push(doc.data().subdomain)
    })
      const postListSitemap = `
        ${subdomainList
            .map(subdomain => {
            return `
                <url>
                <loc>https://${`${subdomain}.${GLIVERY_DOMAIN}`}</loc>
                <lastmod>${getDate}</lastmod>
                </url>`
            })
            .join('')}
        `

      const generatedSitemap = `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
            <url>
            <loc>https://glivery.co.kr/</loc>
            <lastmod>2022-02-16T06:15:22.296Z</lastmod>
            </url>
            ${postListSitemap}
        </urlset>
         `
         
    const formattedSitemap = formatted(generatedSitemap)
    fs.writeFileSync('sitemap.xml', formattedSitemap, '')
        

})();

