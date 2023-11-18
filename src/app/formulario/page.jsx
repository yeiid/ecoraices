
import {FormContex} from '@/context/UserContext'
import Formulario from "../../components/Formulario";
import "./style.css";
import 'leaflet/dist/leaflet.css';


export default function Page  ()  {

  return (
    <>
      <FormContex>
        <section className='container' >
        <Formulario />
        </section>
      </FormContex>
    </>

  );
};


