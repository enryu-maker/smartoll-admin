import React, { Suspense, lazy } from 'react';
import StationSidebar from './components/StationSidebar'
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import Camera from './Screens/Camera';
import { getCameras, getEmployees, getExpenses, getTolls, getUnauthorizedVehicle } from '../../store/actions/tollActions';
import Tolls from './Screens/Tolls';
import { getallWallet, getCustomer, getVehicle } from '../../store/actions/customerAction';
import Employee from './Screens/Employee';
import Expenses from './Screens/Expenses';
import Ownership from './Screens/Ownership';
import WalletM from './Screens/WalletM';
import Unauthorized from './Screens/Unauthorized';
const Main = lazy(() => import('./Screens/Main'));
const Worker = lazy(() => import('./Screens/Worker'));
const Customers = lazy(() => import('./Screens/Customers'));
const Vehicle = lazy(() => import('./Screens/Vehicle'));





export default function SDashboard() {
    const [path, setPath] = React.useState("dashboard");
    const dispatch = useDispatch()
    const renderComponent = () => {
        switch (path) {
            case 'dashboard':
                return <Main />;
            case 'camera':
                return <Camera />;
            case 'toll':
                return <Tolls />;
            case 'employee':
                return <Employee />;
            case 'expenses':
                return <Expenses />;
            case 'customer':
                return <Customers />;
            case 'ownership':
                return <Ownership />;
            case 'walletm':
                return <WalletM />;
            case 'vehicle':
                return <Vehicle />;
            case 'unauthorized':
                return <Unauthorized />;
            case 'worker':
                return <Worker />;
            default:
                return <Main />;
        }
    };
    React.useEffect(() => {
        setPath('dashboard');
        dispatch(getCameras())
        dispatch(getTolls())
        dispatch(getCustomer())
        dispatch(getVehicle())
        dispatch(getEmployees())
        dispatch(getExpenses())
        dispatch(getallWallet())
        dispatch(getUnauthorizedVehicle())
    }, [dispatch])
    return (
        <div className="w-[100vw] flex justify-between bg-slate-50">
            <div className={`transition-all duration-300 ease-in-out w-64 opacity-100`}>
                <StationSidebar setPath={setPath} />
            </div>
            <div className={`transition-all duration-300 ease-in-out w-[90%] p-1`}>
                <Suspense fallback={
                    <div className='w-full h-full flex justify-center items-center'>
                        <ThreeDots
                            visible={true}
                            height="40"
                            width="40"
                            color="#007bff"
                            radius="5"
                            ariaLabel="three-dots-loading"
                        />
                    </div>
                }>
                    {renderComponent()}
                </Suspense>
            </div>
        </div>
    )
}
