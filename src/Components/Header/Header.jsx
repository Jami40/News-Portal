import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <div>
                <img src={logo} alt="" />

                <p className='text-[18px] text-[#706F6F] text-center pt-3'>Journalism Without Fear or Favour</p>
                <p className='text-center text-[#706F6F] py-2 font-medium text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            
        </div>
    );
};

export default Header;