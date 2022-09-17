import MainCard from 'components/MainCard';
import OrdersTable from './MemberList';
import MemberDetail from './MemberDetail';

const MemberList = () => (
    <MainCard>
        {/* <MemberDetail /> */}
        <OrdersTable />
    </MainCard>
);

export default MemberList;
