import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';
import {ParagraphWithBreakLine, ViewContainer} from '../../components';

/**
 * Component that displays the "About Me" section.
 * It shows either the English or native language version based on the user's preference.
 * @returns JSX.Element - The "About Me" view component.
 */
export const AboutMeView: React.FC = () => {
    // Extracting activeUser and isEnglishMode from the Redux store
    const {activeUser, isEnglishMode} = useSelector((state: RootState) => state.portfolio);

    return (
        <ViewContainer title='About Me' to='edit/about-me'>
            <>
                {
                    activeUser.hasEnglishAboutMe && isEnglishMode
                        ?
                        activeUser.englishAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify'
                                                                             str={activeUser.englishAboutMe as string}/>
                        :
                        activeUser.nativeAboutMe && <ParagraphWithBreakLine className='text-secondary text-justify'
                                                                            str={activeUser.nativeAboutMe as string}/>
                }
            </>
        </ViewContainer>
    );
};
