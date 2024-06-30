/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/**",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "tmpfiles.nohat.cc" ,
      },
    ],
  },
};

export default nextConfig;

/** 
* Paste one or more documents here
*/
// {
//   "product_id": {
//     "$oid": "663cdee258656f224d93cec6"
//   },
//   "variations": [
//     {
//       "type": "Colour",
//       "value": "Chrome",
//       "sku": "121072V3",
//       "ean": "5060722080976",
//       "price": 495.01,
//       "weight": "13kg",
//       "height": "35cm",
//       "width": "60cm",
//       "length": "60cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Chrome "
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78151"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Rose Gold",
//       "sku": "121072V4",
//       "ean": "5060722081010",
//       "price": 692,
//       "weight": "13kg",
//       "height": "35cm",
//       "width": "60cm",
//       "length": "60cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Rose Gold"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78152"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Chrome",
//       "sku": "121072V5",
//       "ean": "5060722080983",
//       "price": 495,
//       "weight": "21kg",
//       "height": "35cm",
//       "width": "80cm",
//       "length": "80cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             "Chrome"
//           ]
//         },
//         {
//           "name": "Size",
//           "value": [
//             "80cm"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78153"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Rose Gold",
//       "sku": "121072V6",
//       "ean": "5060722080983",
//       "price": 695,
//       "weight": "21kg",
//       "height": "35cm",
//       "width": "80cm",
//       "length": "80cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Rose Gold"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78154"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Gold",
//       "sku": "121072V7",
//       "ean": "5060722081003",
//       "price": 995,
//       "weight": "33.4kg ",
//       "height": "35",
//       "width": "100cm",
//       "length": "100cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Gold"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78155"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Black ",
//       "sku": "121072V8",
//       "ean": "5060722081034",
//       "price": 499.95,
//       "weight": "13.3kg",
//       "height": "35cm",
//       "width": "60cm",
//       "length": "60cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Black"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78156"
//       }
//     },
//     {
//       "type": "Colour",
//       "value": "Black ",
//       "sku": "121072V9",
//       "ean": "5060722081041",
//       "price": 695,
//       "weight": "21.1kg",
//       "height": "35cm",
//       "width": "80cm",
//       "length": "80cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": [
//             null,
//             "Black"
//           ]
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78157"
//       }
//     },
//     {
//       "type": "Size ",
//       "value": "80cm",
//       "sku": "121072V2",
//       "ean": "5060722080136",
//       "price": 695,
//       "weight": "21kg",
//       "height": "35cm",
//       "width": "80cm",
//       "length": "80cm",
//       "images": [],
//       "otherSpecifications": [
//         {
//           "name": "Colour",
//           "value": "Chrome"
//         }
//       ],
//       "_id": {
//         "$oid": "667bdde595829472e0c78150"
//       }
//     }
//   ],
//   "__v": 0,
//   "selectors": {
//     "Size": [
//       "60cm",
//       "80cm",
//       "100cm"
//     ],
//     "Colour": [
//       "Rose Gold",
//       "Gold",
//       "Black",
//       "Chrome"
//     ]
//   }
// }