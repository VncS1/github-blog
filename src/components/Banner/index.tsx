import { BannerContainer, Icon, IconsContainer, InfosContainer, NameContainer } from "./styles";
import { GithubLogo, Buildings, Users, Link } from 'phosphor-react'

import avatarImg from '../../assets/avatar.png'

export function Banner() {
    return (
        <BannerContainer>
            <img src={avatarImg} alt="" />
            <InfosContainer>
                <NameContainer>
                    <h1>Cameron Williamson</h1>
                    <a href="https://github.com">
                        GITHUB <Link size={16} />
                    </a>
                </NameContainer>
                <span className="description">
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>

                <IconsContainer>
                    <Icon>
                        <GithubLogo size={18} weight="fill" />
                        cameronwll
                    </Icon>
                    <Icon>
                        <Buildings size={18} weight="fill" />
                        Rocketseat
                    </Icon>
                    <Icon>
                        <Users size={18} weight="fill" />
                        32 seguidores
                    </Icon>
                </IconsContainer>
            </InfosContainer>
        </BannerContainer>
    )
}