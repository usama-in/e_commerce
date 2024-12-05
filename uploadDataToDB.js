import axios from "axios";

const data = {
  images: {
    banner:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/main_image.png",
    add: "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes-shoe-png-transparent-shoe-images-pluspng-17+1.png",
    support:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/support.png",
    refund:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/refund.png",
    shipping:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shipping.png",
    refund:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/refund.png",
    footer:
      "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/Rectangle+1+copy+25.png",
  },
  categories: {
    bags: [
      {
        name: "Maple Grey",
        price: "103",
        description:
          "A sleek, modern tote bag crafted from premium vegan leather with a spacious interior, featuring clean lines and a minimalist design.",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/bags/image+Product+(3).png",
        salePrice: "100",
      },
      {
        name: "Sample Green",
        price: "95",
        description:
          "A sleek, modern tote bag crafted from premium vegan leather with a spacious interior, featuring clean lines and a minimalist design.",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/bags/image+Product.png",
        salePrice: "90",
      },
    ],
    shoes: [
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/image+Product+(1).png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/image+Product+(2).png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/image+Product+(4).png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/image+Product+(5).png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/image+Product.png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/Product+Picture01.png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/Product+Picture02.png",
      },
      {
        name: "Nike Air Max 270 React",
        price: "299",
        description:
          "sleek, minimalist leather sneakers featuring a clean white design, padded insoles for all-day comfort, and a flexible rubber sole for superior traction.",
        salePrice: "200",
        image:
          "https://portfolioecomerce.s3.eu-west-2.amazonaws.com/ecommerce/shoes/Product+Picture03.png",
      },
    ],
  },
};

const uploadData = async ()=>{

    try{
        const upload = await axios.post('https://e-commerce-f7f6f-default-rtdb.firebaseio.com/data.json',data);
        const response= await upload;
        if (response.status >= 200 && response.status < 300) {
            console.log('done');
          } 
        else{
            console.log('done')
        }
    }
    catch(error){
        console.log('error',error)
    }
}
uploadData();
