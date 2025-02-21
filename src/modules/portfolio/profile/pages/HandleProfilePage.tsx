import {useHandleProfile} from './hook';

/**
 * Component for handling user profile page.
 * @returns The profile handling section.
 */
export const HandleProfilePage: React.FC = () => {

    // Destructuring properties from the custom hook
    const {hasEnglishDesc, loading, onSubmit, register, locationCountry, locationState} = useHandleProfile();

    return (
        <section>
            <h1 className='text-center'>PROFILE</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-3'>
                <input type='text' placeholder='Full Name' maxLength={50} className='col-span-2'
                       {...register('name', {
                           required: true,
                           maxLength: 50
                       })}
                />
                <input type='text' placeholder='Username' maxLength={15} className='col-span-2'
                       {...register('username', {
                           required: true,
                           minLength: 4,
                           maxLength: 15
                       })}
                />
                <input disabled type='text' placeholder='Email' maxLength={100}
                       className='col-span-4 text-center w-1/2 mx-auto'
                       {...register('email', {
                           required: true,
                           maxLength: 100
                       })}
                />
                <textarea placeholder='Title' maxLength={255} className='h-14 col-span-4'
                          {...register('nativeDesc', {
                              required: hasEnglishDesc,
                              maxLength: 255
                          })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>English</label>
                    <input type='checkbox' {...register('hasEnglishDesc')} />
                </div>
                {hasEnglishDesc &&
                  <textarea placeholder='English Title...' maxLength={255} className='h-14 col-span-4'
                            {...register('englishDesc', {
                                required: true,
                                maxLength: 255
                            })} />
                }
                <input type='text' placeholder='State/City' maxLength={50} className='col-start-2'
                       {...register('locationState', {
                           required: locationCountry.length > 0,
                           maxLength: 50
                       })}
                />
                <input type='text' placeholder='Country' maxLength={50}
                       {...register('locationCountry', {
                           required: locationState.length > 0,
                           maxLength: 50
                       })}
                />
                {
                    loading
                        ?
                        <span className='loader col-span-4'></span>
                        :
                        <button className='col-span-4 w-1/3 mt-2 mx-auto' type='submit'>Save</button>
                }
            </form>
        </section>
    );
};
