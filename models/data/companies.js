import "dotenv/config.js";
import "../../config/database.js";
import Company from "../Company.js";

let companies = [
    {
      name: "Kilback-Terry",
      website: "http://unblog.fr/pede/libero/quis/orci.jsp?aliquam=non&augue=lectus&quam=aliquam&sollicitudin=sit&vitae=amet&consectetuer=diam&eget=in&rutrum=magna&at=bibendum&lorem=imperdiet&integer=nullam&tincidunt=orci&ante=pede&vel=venenatis&ipsum=non&praesent=sodales&blandit=sed&lacinia=tincidunt&erat=eu&vestibulum=felis&sed=fusce&magna=posuere&at=felis&nunc=sed&commodo=lacus&placerat=morbi&praesent=sem&blandit=mauris&nam=laoreet&nulla=ut&integer=rhoncus&pede=aliquet&justo=pulvinar&lacinia=sed&eget=nisl&tincidunt=nunc&eget=rhoncus&tempus=dui&vel=vel&pede=sem&morbi=sed&porttitor=sagittis&lorem=nam&id=congue&ligula=risus&suspendisse=semper&ornare=porta&consequat=volutpat&lectus=quam&in=pede&est=lobortis&risus=ligula&auctor=sit&sed=amet&tristique=eleifend&in=pede&tempus=libero&sit=quis&amet=orci&sem=nullam&fusce=molestie&consequat=nibh&nulla=in&nisl=lectus&nunc=pellentesque&nisl=at&duis=nulla&bibendum=suspendisse&felis=potenti&sed=cras&interdum=in&venenatis=purus&turpis=eu&enim=magna&blandit=vulputate&mi=luctus&in=cum&porttitor=sociis&pede=natoque&justo=penatibus&eu=et&massa=magnis&donec=dis&dapibus=parturient&duis=montes&at=nascetur&velit=ridiculus&eu=mus&est=vivamus&congue=vestibulum&elementum=sagittis&in=sapien&hac=cum&habitasse=sociis&platea=natoque&dictumst=penatibus&morbi=et&vestibulum=magnis",
      description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      photo: "http://dummyimage.com/119x100.png/cc0000/ffffff",
      user_id: "64a4eda3fc13ae2b98bef494",
      active: true,
    },
    {
      name: "Thiel and Sons",
      website: "http://xing.com/est.html?donec=pede&semper=libero&sapien=quis&a=orci&libero=nullam&nam=molestie&dui=nibh&proin=in&leo=lectus&odio=pellentesque&porttitor=at&id=nulla&consequat=suspendisse&in=potenti&consequat=cras&ut=in&nulla=purus&sed=eu&accumsan=magna&felis=vulputate&ut=luctus&at=cum&dolor=sociis&quis=natoque&odio=penatibus&consequat=et&varius=magnis&integer=dis&ac=parturient&leo=montes&pellentesque=nascetur&ultrices=ridiculus&mattis=mus&odio=vivamus&donec=vestibulum&vitae=sagittis&nisi=sapien&nam=cum&ultrices=sociis&libero=natoque&non=penatibus&mattis=et&pulvinar=magnis&nulla=dis&pede=parturient&ullamcorper=montes&augue=nascetur&a=ridiculus&suscipit=mus&nulla=etiam&elit=vel&ac=augue&nulla=vestibulum&sed=rutrum&vel=rutrum&enim=neque&sit=aenean&amet=auctor&nunc=gravida&viverra=sem&dapibus=praesent&nulla=id&suscipit=massa&ligula=id&in=nisl&lacus=venenatis&curabitur=lacinia&at=aenean&ipsum=sit&ac=amet&tellus=justo&semper=morbi&interdum=ut&mauris=odio&ullamcorper=cras&purus=mi&sit=pede&amet=malesuada&nulla=in&quisque=imperdiet&arcu=et&libero=commodo",
      description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      photo: "http://dummyimage.com/209x100.png/cc0000/ffffff",
      user_id: "64a4eda3fc13ae2b98bef495",
      active: false,
    },
    {
      name: "Frami, Hammes and O'Hara",
      website: "https://qq.com/vestibulum/ante.jpg?sit=suscipit&amet=nulla&sapien=elit&dignissim=ac&vestibulum=nulla&vestibulum=sed&ante=vel&ipsum=enim&primis=sit&in=amet&faucibus=nunc&orci=viverra&luctus=dapibus&et=nulla&ultrices=suscipit&posuere=ligula&cubilia=in&curae=lacus&nulla=curabitur&dapibus=at&dolor=ipsum&vel=ac&est=tellus&donec=semper&odio=interdum&justo=mauris&sollicitudin=ullamcorper&ut=purus&suscipit=sit&a=amet&feugiat=nulla&et=quisque&eros=arcu&vestibulum=libero&ac=rutrum&est=ac&lacinia=lobortis&nisi=vel&venenatis=dapibus&tristique=at&fusce=diam&congue=nam&diam=tristique&id=tortor&ornare=eu&imperdiet=pede",
      description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      photo: "http://dummyimage.com/203x100.png/dddddd/000000",
      user_id: "64a4eda3fc13ae2b98bef496",
      active: false,
    },
    {
      name: "Robel, Volkman and Rowe",
      website: "http://theatlantic.com/odio.json?erat=odio&vestibulum=curabitur&sed=convallis&magna=duis&at=consequat&nunc=dui&commodo=nec",
      description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      photo: "http://dummyimage.com/121x100.png/ff4444/ffffff",
      user_id: "64a4eda3fc13ae2b98bef497",
      active: true,
    },
    {
      name: "Hegmann-Stehr",
      website: "https://gov.uk/libero/non/mattis/pulvinar/nulla/pede.js?non=vestibulum&velit=sit&donec=amet&diam=cursus&neque=id&vestibulum=turpis&eget=integer&vulputate=aliquet&ut=massa&ultrices=id&vel=lobortis&augue=convallis&vestibulum=tortor&ante=risus&ipsum=dapibus&primis=augue&in=vel&faucibus=accumsan&orci=tellus&luctus=nisi&et=eu&ultrices=orci&posuere=mauris&cubilia=lacinia&curae=sapien&donec=quis&pharetra=libero&magna=nullam&vestibulum=sit&aliquet=amet&ultrices=turpis&erat=elementum&tortor=ligula&sollicitudin=eleifend&mi=ligula&sit=vehicula&amet=consequat&lobortis=morbi&ligula=a&quis=magna&odio=vestibulum&consequat=aliquet&varius=ultrices&integer=posuere&ac=cubilia&leo=curae&pellentesque=mauris&ultrices=viverra&posuere=diam&cubilia=non&curae=mauris&integer=aliquet&porttitor=massa&lobortis=id&ligula=lobortis&sit=convallis&amet=tortor&eleifend=tincidunt&pede=eu&morbi=feugiat&porttitor=in&lorem=lectus&id=pellentesque&ligula=at&tincidunt=nulla&tempus=suspendisse&at=potenti&nibh=cras&in=in&hac=purus&habitasse=eu&platea=magna&dictumst=vestibulum&morbi=ante&vestibulum=ipsum&vel=primis&it=&porta=in&porta=faucibus&integer=orci&pede=luctus&justo=et=cras",
      description: "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
      photo: "http://dummyimage.com/148x100.png/ff4444/ffffff",
      user_id: "64a4eda3fc13ae2b98bef498",
      active: true,
    },
  ];
  
  Company.insertMany(companies)
  .then(() => {
    console.log("Insert data successfully!");
  })
  .catch((error) => {
    console.log("Insert data ERROR:", error);
  });