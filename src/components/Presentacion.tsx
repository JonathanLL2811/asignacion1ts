type Persona = {
    Nombre: string;
    Apellido: string;
}

function Presentacion(props: Persona) {
    return (
        <div>
            <h2>Mi nombre es: {props.Nombre}</h2>
            <h2>Mi Apellido es: {props.Apellido}</h2>
        </div>
    );
}
export default Presentacion