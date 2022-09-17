// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        }}
    >
        <Navigation />

        {/* đóng lại thẻ NavCard vì chưa có chức năng sài tới  */}
        {/* <NavCard /> */}
    </SimpleBar>
);

export default DrawerContent;
