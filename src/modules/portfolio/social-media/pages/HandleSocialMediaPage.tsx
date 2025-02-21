import {useHandleSocialMedia} from './hook';

/**
 * Component to handle social media links.
 * @returns The rendered component.
 */
export const HandleSocialMediaPage: React.FC = () => {
    const {onSubmit, loading, register} = useHandleSocialMedia();

    return (
        <section>
            <h1 className='text-center'>SM</h1>
            <form onSubmit={onSubmit}>
                {/* Dropdown for selecting social media */}
                <select className='mb-4'
                        {...register('name', {
                            required: true
                        })}
                >
                    {['Facebook', 'Github', 'Instagram', 'LinkedIn', 'Twitter', 'Personal Website', 'Whatsapp', 'Youtube'].map((opt, i) =>
                        <option key={opt} value={i}>{opt}</option>)}
                </select>
                {/* Input field for URL */}
                <input type='text' placeholder='https://' maxLength={255} className='col-span-2 mb-2'
                       {...register('url', {
                           required: true,
                           maxLength: 255,
                           pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
                       })}
                />
                {/* Conditional rendering based on loading state */}
                {
                    loading
                        ?
                        <span className='loader'></span>
                        :
                        <button className='w-1/3 mt-2 mx-auto' type='submit'>Save</button>
                }
            </form>
        </section>
    );
};
