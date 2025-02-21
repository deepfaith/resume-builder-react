import {useHandleProject} from './hook';

/**
 * Represents the project handling page component.
 * @returns The project handling page JSX element.
 */
export const HandleProjectPage: React.FC = () => {
    // Destructure the necessary properties from the custom hook
    const {hasEnglishDesc, loading, register, onSubmit} = useHandleProject();

    return (
        <section>
            <h1 className='text-center'>PROJECT</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-4'>
                <input type='text' placeholder='Project name' maxLength={50} className='col-span-2'
                       {...register('name', {
                           required: true,
                           maxLength: 50
                       })}
                />
                <input type='text' placeholder='Link:  https://' maxLength={255} className='col-span-2'
                       {...register('url', {
                           required: true,
                           maxLength: 255,
                           pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
                       })}
                />
                <textarea placeholder='Description...' maxLength={1000} className='col-span-4'
                          {...register('nativeDesc', {
                              required: true,
                              maxLength: 1000
                          })}
                />
                <div className='flex justify-center items-center col-span-4'>
                    <label className='mr-2'>English</label>
                    <input type='checkbox' {...register('hasEnglishDesc')} />
                </div>
                {hasEnglishDesc &&
                  <textarea placeholder='English description...' maxLength={1000} className='col-span-4'
                            {...register('englishDesc', {
                                required: true,
                                maxLength: 1000
                            })} />
                }
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
