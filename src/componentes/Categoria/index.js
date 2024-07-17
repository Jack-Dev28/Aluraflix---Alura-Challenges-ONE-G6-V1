import "./Categoria.css"
import Card from "../Card"
import hexToRgba from 'hex-to-rgba';
import videosData from '../../data/videosData';

const Categoria = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { cards, eliminarCard, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.7)
    }


    const estiloTitulo = { borderColor: colorPrimario, backgroundColor: colorPrimario}


    return <>
        {
            cards.length > 0 &&
            <section className="categoria" style={obj}>
                <section className="categoria-block-1">
                    <input
                        type='color'
                        className="input-color"
                        value={colorPrimario}
                        onChange={(evento) => {
                            actualizarColor(evento.target.value, id)
                        }}
                    />
                    <h3 style={estiloTitulo} >{titulo}</h3>
                </section>
                <section className="categoria-block-2">
                    <div className="cards">
                        {
                            cards.map((card, index) => <Card
                            datos={card}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarCard={eliminarCard}
                            like={like}
                            onSelectVideo={props.onSelectVideo} // Pass the onSelectVideo prop from Categoria to Card
                        />)
                        }
                    </div>
                </section>
            </section>
        }
    </>
}

export default Categoria