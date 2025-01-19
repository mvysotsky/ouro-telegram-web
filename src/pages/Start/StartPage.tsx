import * as S from './StartPage.style.ts'
import MainButton from "../../components/MainButton.tsx";

const StartPage = () => {
    return (
        <S.StyledStartPage>
            <S.StyledTextLogo />
            <p>Welcome, Seeker, to the inner path of the Ouroboros Society. Here, quests await, and each challenge
                brings you closer to the heart of our mystery. Prove your worth, earn your rank, and let the journey
                begin.</p>
            <MainButton text={'Enter'} />
        </S.StyledStartPage>
    );
};

export default StartPage;