import { useEffect, useState } from "react";

export const useCEP = (cep) => {
    const [endereco, setEndereco] = useState({});

    const fetchCep = async (cep) => {
        const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const objDados = await dados.json();
        setEndereco(objDados);
    }

    useEffect(() => {
        fetchCep(cep);
    }, [cep]);

    return endereco;
}