import React from "react"

const Form = () => {
    return (
        <div className="main">
            <p className="sign">Jovem Programador</p>

            <form className="form">
                <input type="text" className="username" placeholder="Usuário" />
                <input type="password" className="password" placeholder="Senha" />

                <a href="#" className="submit">
                    Entrar
                </a>

                <p className="forgot">
                    <a href="#">
                        Esqueceu a senha?
                    </a>
                </p>
            </form>
        </div>
    )
}

export default Form