import {useHandleProfile} from './hook';

/**
 * Component for handling the "About Me" page.
 * @returns The "About Me" page component.
 */
export const HandleAboutMePage: React.FC = () => {
    // Custom hook to manage profile data
    const {hasEnglishAboutMe, loading, register, onSubmit} = useHandleProfile();

    return (
        <section>
            <h1 className='text-center'>ABOUT ME</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-3'>
                <textarea placeholder='About me...' maxLength={500} className='col-span-4'
                          {...register('nativeAboutMe', {
                              required: hasEnglishAboutMe,
                              maxLength: 500
                          })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>English</label>
                    <input type='checkbox'{...register('hasEnglishAboutMe')} />
                </div>
                {hasEnglishAboutMe &&
                  <textarea placeholder='English About me...' maxLength={500} className='col-span-4'
                            {...register('englishAboutMe', {
                                required: true,
                                maxLength: 500
                            })} />
                }
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span> // Loading indicator
                        :
                        <button className='col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Save</button> // Submit button
                }
            </form>
        </section>
    );
};
