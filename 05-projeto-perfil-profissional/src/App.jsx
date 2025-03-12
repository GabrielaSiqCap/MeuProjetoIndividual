
import "./App.css";
import Links from "./components/links/links"
import Perfil from "./components/perfil/perfil";
import Rodape from "./components/rodape/rodape";
import SocialLinks from "./components/sociallinks/SocialLinks";
import Switch from "./components/switch/Switch";
import { Children, useState } from "react";


const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>

<div id="container">

    <Perfil>Gabriela</Perfil>

    <Switch troca={troca} isLight={isLight}></Switch>

      <div id="links">
        <ul>
          <Links link={"https://www.linkedin.com/in/gabriela-siqueira-caputti-98ab3433b/"}>Sobre mim</Links>
          <Links link={"https://br.mundopsicologos.com/artigos/categoria/atualidades-sobre-psicologia"}>Atualidades de Psicologia</Links>
          <Links link={"https://wa.link/9y3svj"}>Contato</Links>
        </ul>
      </div>

      <div id="socialLinks">
      <SocialLinks link={"https://github.com/GabrielaSiqCap"} icon={"logo-github"}/>
      <SocialLinks link={"https://www.instagram.com/siqueiracaputti/"} icon={"logo-instagram"}/>
      <SocialLinks link={"https://www.linkedin.com/in/gabriela-siqueira-caputti-98ab3433b/"} icon={"logo-linkedin"}/>
      </div>

      <Rodape link={"https://www.instagram.com/siqueiracaputti/"}> Gabriela</Rodape>
      
</div>
</div>
)
}

export default App
