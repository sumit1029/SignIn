let imageArray = ["https://image.imgcreator.ai/ImgCreator/a9bbf47f50ee430dad1527f7f8747094/hq/c8995848-f545-11ed-931b-0242ac110002_0.webp"
,"https://image.imgcreator.ai/ImgCreator/d1b0a107039144ef8398b8359bf02571/hq/392e3988-f54c-11ed-b32c-0242ac110006_1.webp"
,"https://image.imgcreator.ai/ImgCreator/af4e32562da247bbad8f48844fdcee45/hq/3cb492f6-f555-11ed-9185-0242ac110003_0.webp"
,"https://image.imgcreator.ai/ImgCreator/dfc600b22eb14f2f9715f8b154976f33/hq/d28dd7e4-f549-11ed-88d8-0242ac110002_0.webp"
,"https://image.imgcreator.ai/ImgCreator/b262341d9dce461c94682c289ebeeead/hq/ec4464fa-e333-11ed-b143-0242ac110004_1.webp"
,"https://cdn.catboys.com/images/image_47.jpg"
,"https://aws-file.imgcreator.ai/yuan-image/ImgCreator/33a81573e2fe4c5c8cfbac8534628d54/hq/e3d3602a-90c5-11ed-8344-0242ac110002_1.webp"
,"https://aws-file.imgcreator.ai/yuan-image/ImgCreator/f5b120a991af4c1a9d625d345627c1d9/hq/b2fc65bc-92b6-11ed-8488-0242ac110002_0.webp"
,"https://image.imgcreator.ai/ImgCreator/992db640b6c9497999e3a72a7217b9df/hq/e02823fa-9081-11ed-9c55-0242ac110002_0.webp"
,"https://image.imgcreator.ai/ImgCreator/93638e06c382463ebd707d9f115ba9ae/hq/b3224e6c-154c-11ee-823e-0242ac110008_1.webp"
,"https://image.imgcreator.ai/ImgCreator/ec5ec686201c41c4880c4b520cbf8874/hq/ecc6fcd8-1607-11ee-ae1a-0242ac110003_0.webp"
,"https://image.imgcreator.ai/ImgCreator/28fc3194c810448291d2969ad4259081/hq/2180734a-15e6-11ee-a9d6-0242ac110007_1.webp"
,"https://image.imgcreator.ai/ImgCreator/4c456eacd4854aa1ba18286c254205ce/hq/05a69f48-15e4-11ee-bf73-0242ac110006_0.webp"
,"https://aws-file.imgcreator.ai/yuan-image/ImgCreator/a395ee0879514e2f9b1362f3e5beb026/hq/310271a0-a38c-11ed-b7d6-0242ac110002_0.webp"
,"https://image.imgcreator.ai/ImgCreator/c75b0de2ddd94528b8f6e768c109c2d1/hq/cf663372-f35a-11ed-bcee-0242ac110006_1.webp"]

let ele = document.getElementById("img")
ele.src = imageArray[Math.floor(Math.random() * imageArray.length)]


