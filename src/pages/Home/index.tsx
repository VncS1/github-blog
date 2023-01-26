import { Banner } from "./components/Banner";
import { HomeContainer } from "./styles";
import { SearchForm } from "./components/SearchForm";

export function Home(){
    return (
        <HomeContainer>
            <Banner />
            <SearchForm />
        </HomeContainer>
    )
}
