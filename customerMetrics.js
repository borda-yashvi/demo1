import React from 'react'
import { FileOutlined, PieChartOutlined, DesktopOutlined, SecurityScanOutlined, CheckCircleOutlined, MinusCircleOutlined, EyeInvisibleOutlined, FireFilled, EyeInvisibleFilled, FolderOpenFilled, FunnelPlotFilled } from '@ant-design/icons';
import InfoCards from '../../CommonComponents/InfoCard/InfoCard';
import Flex from '../../CommonComponents/Flex';
import styled from 'styled-components';
import useDragScroll from '../../../customeHooks/useDragScroll';

export const MatricsWrapper = styled(Flex)`
    padding: 0 30px;
    width:calc(100vw - 220px);
    overflow-x:hidden;
    white-space:nowrap;
    cursor: grabbing;
`

const CustomerMetrics = ({ cardsData, isDashboard, width, height }) => {

    const customerMetricsRef = useDragScroll();
    return (
        <MatricsWrapper spaceBetween ref={customerMetricsRef}>
            <InfoCards
                width={width ? width : '250px'}
                height={height ? height : '100px'}
                icon={<FolderOpenFilled style={{ color: "#2F54EB", fontSize: '1.2rem' }} />}
                text='Total Customer'
                value={cardsData?.totalCustomer || 0}
                padding={'0px 18px'}
                backgroundColor={'transparent'}
                color={`#1e90ff`}
                isDashboard={isDashboard}
                margin={'0 10px 0 0'}
                border={'1.5px solid #47688530'}
            />
            <InfoCards
                width={width ? width : '250px'}
                height={height ? height : '100px'}
                icon={<FireFilled style={{ color: "#2F54EB", fontSize: '1.2rem' }} />}
                text='Active Customer'
                value={cardsData?.active || 0}
                padding={'0px 18px'}
                backgroundColor={'transparent'}
                color={`#1e90ff`}
                isDashboard={isDashboard}
                margin={'0 10px 0 0'}
                border={'1.5px solid #47688530'}
            />
            <InfoCards
                width={width ? width : '250px'}
                height={height ? height : '100px'}
                icon={<EyeInvisibleFilled style={{ color: "#2F54EB", fontSize: '1.5rem' }} />}
                text='Inactive Customer'
                value={cardsData?.inactive || 0}
                padding={'0px 18px'}
                backgroundColor={'transparent'}
                color={`#1e90ff`}
                isDashboard={isDashboard}
                margin={'0 10px 0 0'}
                border={'1.5px solid #47688530'}
            />
            <InfoCards
                width={width ? width : '250px'}
                height={height ? height : '100px'}
                icon={<FunnelPlotFilled style={{ color: "#2F54EB", fontSize: '1.2rem' }} />}
                text='Total Recevable Amount'
                value={cardsData?.totalReceivableAmount || 0}
                padding={'0px 18px'}
                backgroundColor={'transparent'}
                color={`#1e90ff`}
                isDashboard={isDashboard}
                margin={'0 10px 0 0'}
                border={'1.5px solid #47688530'}
            />
            <InfoCards
                width={width ? width : '250px'}
                height={height ? height : '100px'}
                icon={<FunnelPlotFilled style={{ color: "#2F54EB", fontSize: '1.2rem' }} />}
                text='Due Amount'
                value={cardsData?.minQty || 0}
                padding={'0px 18px'}
                backgroundColor={'transparent'}
                color={`#1e90ff`}
                isDashboard={isDashboard}
                margin={'0 10px 0 0'}
                border={'1.5px solid #47688530'}
            />

        </MatricsWrapper>
    )

}



export default CustomerMetrics









