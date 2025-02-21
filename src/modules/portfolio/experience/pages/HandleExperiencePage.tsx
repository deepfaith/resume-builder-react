import {useHandleExperience} from './hook';

/**
 * Represents the page component for handling experience details.
 * @returns The HandleExperiencePage component.
 */
export const HandleExperiencePage: React.FC = () => {
    // Destructuring the custom hook's return values
    const {hasEnglishDesc, isActual, loading, register, onSubmit} = useHandleExperience();

    return (
        <section>
            <h1 className='text-center'>EXPERIENCE</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-4 gap-4'>
                <input type='text' placeholder='Position' maxLength={100} className='col-span-2'
                       {...register('position', {
                           required: true,
                           maxLength: 100
                       })}
                />
                <input type='text' placeholder='Company' maxLength={50} className='col-span-2'
                       {...register('company', {
                           required: true,
                           maxLength: 50
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
                <select className='col-span-4'{...register('type', {required: true})}>
                    {['Full Time', 'Part Time', 'Freelance', 'Volunteer'].map((opt, i) => <option key={i}
                                                                                                  value={i}>{opt}</option>)}
                </select>
                <div className='h-full flex flex-col justify-center items-center'>
                    <label className='mb-1 text-center'>Is Current</label>
                    <input type='checkbox' {...register('isActual')} />
                </div>
                <div className='grid grid-cols-2 gap-4 col-span-3'>
                    <input type='number' placeholder='Start Month' maxLength={2} max={12} min={1}
                           className='text-center w-24 mx-auto'
                           {...register('monthStart', {
                               required: true,
                               maxLength: 2,
                               max: 12,
                               min: 1
                           })}
                    />
                    <input type='number' placeholder='Start Year' maxLength={4} minLength={4}
                           max={new Date().getUTCFullYear()} min={1900}
                           className='text-center w-24 mx-auto'
                           {...register('yearStart', {
                               required: true,
                               maxLength: 4,
                               minLength: 4,
                               max: new Date().getUTCFullYear(),
                               min: 1900
                           })}
                    />
                    {
                        !isActual &&
                      <>
                        <input type='number' placeholder='End Month' maxLength={2} max={12} min={1}
                               className='text-center w-24 mx-auto'
                               {...register('monthEnd', {
                                   required: true,
                                   maxLength: 2,
                                   max: 12,
                                   min: 1
                               })}
                        />
                        <input type='number' placeholder='End Year' maxLength={4} minLength={4}
                               max={new Date().getUTCFullYear()} min={1900}
                               className='text-center w-24 mx-auto'
                               {...register('yearEnd', {
                                   required: true,
                                   maxLength: 4,
                                   minLength: 4,
                                   max: new Date().getUTCFullYear(),
                                   min: 1900
                               })}
                        />
                      </>
                    }
                </div>
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
