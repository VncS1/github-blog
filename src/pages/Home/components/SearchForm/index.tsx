import { FormContainer, InfosContainer, SearchContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchContainer>
            <InfosContainer>
                <span className="title">Publicações</span>
                <span className="quantity">6 publicações</span>
            </InfosContainer>
            <FormContainer>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    required
                />
            </FormContainer>
        </SearchContainer>
    )
}