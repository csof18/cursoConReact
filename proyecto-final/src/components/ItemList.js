import { useState, useEffect } from 'react';
import Item from './Item';
export default function ItemList() {
  const datosProducto = [
    //RAMOS
    {
      id: "1",
      titulo: "ramo de flores",
      imagen: {
        src:
          "https://www.okchicas.com/wp-content/uploads/2020/07/Ramos-de-flores-hermosos-y-rom%C3%A1nticos-5.jpg",
        height: "300px"
      },
      nombreProducto: "Rosas rosadas",
      descripcion: "24 rosas rosadas + flores de estacion",
      precio: 1550,
      stock: 5,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    {
      id: "2",
      titulo: "ramo de flores",
      imagen: {
        src:
          "https://www.elmueble.com/medio/2018/02/08/ramos-de-flores-silvestres-de-maria-salazar_77fc2920.jpg",
        height: "300px"
      },
      nombreProducto: "Flores de estacion",
      descripcion: "Flores de estacion",
      precio: 800,
      stock: 12,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    {
      id: "3",
      titulo: "ramo de flores",
      imagen: {
        src:
          "https://floreriareviens.com/wp-content/uploads/2021/06/ramos-flores.jpg",
        height: "300px"
      },
      nombreProducto: "Flores de colores",
      descripcion: "Mix de flores de colores",
      precio: 800,
      stock: 10,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    {
      id: "4",
      titulo: "ramo de flores",
      imagen: {
        src:
          "https://floresmenta.com/1423-thickbox_default/ramo-de-margaritas-tricolor.jpg",
        height: "300px"
      },
      nombreProducto: "Margaritas",
      descripcion: "Margaritas de colores",
      precio: 790,
      stock: 7,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    {
      id: "5",
      titulo: "ramo de flores",
      imagen: {
        src:
          "https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/c7392c7f19a7d944ea71661e942c165e4ce3bab8.jpg",
        height: "300px"
      },
      nombreProducto: "Flores blancas",
      descripcion: "Mix de flores blancas",
      precio: 850,
      stock: 8,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    //COMBOS
    {
      id: "6",
      titulo: "combo especial",
      imagen: {
        src:
          "https://http2.mlstatic.com/D_NQ_NP_736325-MLA25433781363_032017-O.jpg",
        height: "300px"
      },
      nombreProducto: "Combo enamorados",
      descripcion: "24 Rosas + oso de peluche + 24 Ferrero Rocher",
      precio: 4000,
      stock: 3,
      envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
    },
    {
        id: "7",
        titulo: "combo especial",
        imagen: {
          src:
            "https://www.floristeriadfranco.com/521-home_default/arreglo-floral-con-chocolates-y-peluche.jpg",
          height: "300px"
        },
        nombreProducto: "Combo tierno",
        descripcion: "24 rosas + 1 oso de peluche love + 2 chocolates",
        precio: 3000,
        stock: 3,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "8",
        titulo: "combo especial",
        imagen: {
          src:
            "https://soydegamx.com/wp-content/uploads/2021/03/100796914_272753623877861_34437352722006016_n-1.png",
          height: "300px"
        },
        nombreProducto: "Ramo de flores y rosas dulces",
        descripcion: "Ramo de flores mixtas + 6 Ferrero Rocher",
        precio: 2200,
        stock: 2,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "9",
        titulo: "combo especial",
        imagen: {
          src:
            "https://floresmaru.com.ar/wp-content/uploads/2019/05/14-11-2.jpg",
          height: "300px"
        },
        nombreProducto: "Ramo de rosas",
        descripcion: "ramo de 12 rosas rojas + corazon de golocinas + baileys",
        precio: 2900,
        stock: 5,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },

      {
        id: "10",
        titulo: "combo especial",
        imagen: {
          src:
            "https://floresavenida.com.ar/imgdb/productos/imgp1369_10.jpeg",
          height: "300px"
        },
        nombreProducto: "Festejando El amor",
        descripcion: 'Ramo de flores con Ferrero Rocher + oso de peluche "Te amo" + 1 Champagnes',
        precio: 3000,
        stock: 2,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      //regalos
      {
        id: "11",
        titulo: "regalos",
        imagen: {
          src:
            "https://digaloconflores.co/wp-content/uploads/2020/06/SERIE-B-CATALOGO-FRUTEROS-006-Genetrix-Natura-500x500.png",
          height: "300px"
        },
        nombreProducto: "Desayuno sano",
        descripcion: "Ramo de flores mixtas con 12 rosas amarillas + bandeja de frutas",
        precio: 2000,
        stock: 6,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "12",
        titulo: "regalos",
        imagen: {
          src:
            "https://i.pinimg.com/originals/3e/06/dc/3e06dc5860afa73ca5daad1b1beb0eb6.jpg",
          height: "300px"
        },
        nombreProducto: "Combo salado",
        descripcion: "4 globos dorados + 1 cartel de felicitacion + 2 cervezas + una mini torta + picadita + snacks",
        precio: 3500,
        stock: 11,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "13",
        titulo: "regalos",
        imagen: {
          src:
            "https://i.pinimg.com/originals/b0/07/c4/b007c4406919e3166e12c8810c6efe90.jpg",
          height: "300px"
        },
        nombreProducto: "Desayuno sorpresa",
        descripcion: "2 globos de colores + mini ramo de flores + 1 cafe + mini torta + masas secas + frutas de estacion + regalos sorpresa + bandeja",
        precio: 2500,
        stock: 9,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "14",
        titulo: "regalos",
        imagen: {
          src:
            "https://i.pinimg.com/originals/7f/a1/5a/7fa15a2db615e457f4dd118f09de9623.jpg",
          height: "300px"
        },
        nombreProducto: "Super merienda",
        descripcion: "4 globos + cartel y 2 fotos personalizadas + 2 rosas + 2 cervzas + 1 jugo + 2 medialunas + 1 super waffle",
        precio: 2800,
        stock: 8,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "15",
        titulo: "regalos",
        imagen: {
          src:
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/046/834/products/pic_20200630_105716-7e9a8ca281aa1a3c1c15935255005493-640-0.jpg",
          height: "300px"
        },
        nombreProducto: "Super picada personalizada",
        descripcion: "1 chopp de cerzeza + 1 cerveza + fotos personalizadas + 1 pan de campo + mix de snacks + mix de fiambres",
        precio: 2600,
        stock: 3,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      //PLANTAS
      {
        id: "16",
        titulo: "plantas",
        imagen: {
          src:
            "https://www.jujuysemueve.com.ar/wp-content/uploads/2021/07/plantas-kokedamas.jpg",
          height: "300px"
        },
        nombreProducto: "Kokedamas",
        descripcion: "El nuevo arte japones, plantas del hogar sin macetas",
        precio: 1000,
        stock: 4,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "17",
        titulo: "plantas",
        imagen: {
          src:
            "https://nuestraflora.com/wp-content/uploads/2019/07/jazmin-enano-o-jazmin-kimura-7.jpg",
          height: "300px"
        },
        nombreProducto: "Jazmin kimura",
        descripcion: "Jazmin enano o kimura",
        precio: 980,
        stock: 2,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "18",
        titulo: "plantas",
        imagen: {
          src:
            "https://http2.mlstatic.com/D_NQ_NP_661947-MLA31185766454_062019-O.jpg",
          height: "300px"
        },
        nombreProducto: "Violeta de los alpes",
        descripcion: "Violeta de los alpes",
        precio: 800,
        stock: 3,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "19",
        titulo: "plantas",
        imagen: {
          src:
            "https://i.pinimg.com/originals/91/99/4c/91994c5119b6fb2bc7a383f47a8f878c.jpg",
          height: "300px"
        },
        nombreProducto: "No me olvides",
        descripcion: "No me olvides",
        precio: 750,
        stock: 1,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      },
      {
        id: "20",
        titulo: "plantas",
        imagen: {
          src:
            "https://i.ytimg.com/vi/EHYInq3ZnnU/sddefault.jpg",
          height: "300px"
        },
        nombreProducto: "Pensamiento",
        descripcion: "Pensamiento",
        precio: 850,
        stock: 5,
        envio: "Envío 48hs en CABA y GBA ( VER MAPA EN: https://cutt.ly/regalameRegalate - No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui)"
      }
  ];

  const [detallesProductos, setDetallesProductos] = useState([]);

  useEffect(()=>{
      setTimeout(()=>{
        setDetallesProductos(datosProducto)
      }, 2000)
  }, [])
  const getProductos = async () => {
      try{
          setDetallesProductos(datosProducto);
      }catch (error){
          console.log('SURGIO UN ERROR');
      }
  };
  useEffect(() => {
      getProductos();
  }, []);
  return(
    <>
        {detallesProductos.length &&
        detallesProductos.map((mapProductos) => 
        <>
            {console.log('MOSTRAR DATOS DEL MOCK CON DELAY', mapProductos)}
            <Item {...mapProductos} />
        </>
        )}
    </>
  )
}