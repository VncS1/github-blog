import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <Banner />
            <SearchForm />
        </HomeContainer>
    )
}