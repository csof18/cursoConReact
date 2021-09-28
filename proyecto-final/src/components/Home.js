import { Link } from "react-router-dom";
export default function Home(){
    return(
    <>
      <Link to="/"></Link>
        <section  className="colorDeFondo" >
            <h1>Nosotros</h1>
            <p style={{textAlign: "justify", margin:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, est perspiciatis laboriosam dicta expedita pariatur sequi modi optio rerum magni perferendis recusandae consequuntur ullam unde, dolor quos consequatur quia sunt.
                Autem laboriosam, quaerat quo ex, asperiores animi cumque exercitationem totam eaque sint, eveniet necessitatibus sed id temporibus officiis reiciendis aliquid! Pariatur distinctio ipsam soluta tempore hic quos omnis placeat reprehenderit?
                Sed quis aliquid, aspernatur odit numquam consequuntur temporibus quibusdam laudantium et exercitationem amet reprehenderit provident libero esse itaque iusto tenetur nulla necessitatibus impedit! Ratione voluptatem quod, doloremque quibusdam deleniti dolores.
                Ipsam numquam sapiente cum hic culpa aut molestias necessitatibus tenetur quia nihil commodi eos a perspiciatis doloremque explicabo esse officiis in, odio dolore cumque sint laborum tempore facilis? Ab, ad?
                Harum impedit delectus odit quis atque itaque dolore assumenda modi reiciendis nam ab ipsa quos aut suscipit natus dignissimos aliquid ullam voluptate pariatur, velit quisquam iusto! Dolorum officiis architecto ea.
            </p>    
          <div style={{paddingBottom:"20px"}}>
            <img style={{height:"200px", width:"200px"}} src="https://s1.1zoom.me/big0/649/316550-svetik.jpg" alt="Ramo de flores"/>
            <img style={{height:"200px", width:"200px"}} src="https://www.hola.com/imagenes/decoracion/20210308185578/cultivar-ficus-plantas-interior-mc/0-930-469/ficus-1-m.jpg" alt="Ficus"/>
            <img style={{height:"200px", width:"200px"}} src="https://ornamentalis.com/wp-content/uploads/2016/08/petunia-flor-balcon.jpg" alt="Petunias"/>
            <img style={{height:"200px", width:"200px"}} src="https://i.pinimg.com/originals/71/88/87/718887891c51c0472e064ad3f27ca61c.jpg" alt="Lazo de amor"/>
            <img style={{height:"200px", width:"200px"}} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/estrella-federal-bols1-c2a5b84279f98035a515882541044904-1024-1024.png" alt="Estrella federal"/>
          </div>
        </section>
      </>
    )
}