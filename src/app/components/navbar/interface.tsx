import React, { useState } from 'react'
import moment from 'moment-timezone';
import { Notification } from './index'
import Image from 'next/image';
import FmmBadge from '../badge';
import { IconClock } from '@tabler/icons-react';
import { Button, Pagination, PaginationProps } from 'antd';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';




const Notifications = ({notifications, handleBellClick}:{notifications: Notification[], handleBellClick: () => void,}) => {

  const [notificationsData, setNotificationsData] = useState(notifications);
  const [isShow, setIsShow] = useState({
    all: true,
    booking: false,
    account: false,
    service: false,
    request: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7; 


  const handleFilterChange = (type: string) => {
    setIsShow(prevState => ({
      all: type === 'all',
      booking: type === 'booking',
      account: type === 'account',
      service: type === 'service',
      request: type === 'request',
    }));

    switch (type) {
      case 'all':
          setNotificationsData(notifications);
          setCurrentPage(1);
          break;
      case 'booking':
          setNotificationsData(notifications.filter(notification => notification.type === 'booking'));
          setCurrentPage(1);
          break;
      case 'account':
          setNotificationsData(notifications.filter(notification => notification.type === 'account'));
          setCurrentPage(1);
          break;
      case 'service':
          setNotificationsData(notifications.filter(notification => notification.type === 'service'));
          setCurrentPage(1);
          break;
      case 'request':
          setNotificationsData(notifications.filter(notification => notification.type === 'request'));
          setCurrentPage(1);
          break;
      default:
          setNotificationsData(notifications);
    }
  };

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
        return (
          <Button className='prevButton'>
            <IconArrowNarrowLeft className='icon' size={20} />
          </Button>
        );
    }
    if (type === 'next') {
        return (
          <Button className='nextButton'>
              <IconArrowNarrowRight className='icon' size={20} />
          </Button>
        );
    }
    return null;
  };


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = notificationsData.slice(startIndex, endIndex);

  return (
    <div className="notificationDropdown">
      <div className='notificationHeaderContainer'>
          <div className="notificationHeader">
              <h1>Notifications</h1>
              <div className="notificationClose" onClick={handleBellClick}>
                  &#x2715;
              </div>
          </div>
          <div className="notificationFilter">
            <h3 onClick={() => handleFilterChange('all')} className={isShow.all ? 'active' : ''}>All</h3>
            <h3 onClick={() => handleFilterChange('account')} className={isShow.account ? 'active' : ''}>Account</h3>
            <h3 onClick={() => handleFilterChange('booking')} className={isShow.booking ? 'active' : ''}>Booking</h3>
            <h3 onClick={() => handleFilterChange('service')} className={isShow.service ? 'active' : ''}>Service</h3>
            <h3 onClick={() => handleFilterChange('request')} className={isShow.request ? 'active' : ''}>Request</h3>
          </div>
      </div>
      <div className="notificationContent">
          {visibleData.map((item : Notification, id: number) => (
              <div key={id} className='activityCard'>
                  <div className='cardPic'>
                    <Image width={100} height={100} src={`https://ui-avatars.com/api/?name=${item.firstName}+${item.lastName}&background=random`} alt="user image" />
                  </div>
                  <div className='cardDetails'>
                      <h3>{item.firstName} {item.lastName}</h3>
                      <p className='message'>{item.message}{item.bookingId && '. Booking ID'} <span>{item.bookingId}</span></p>
                      <div className='badgeContainer'>
                        <FmmBadge label={item.type} />
                        <p> <IconClock size={15}/> {moment.tz(item.timeCreated, 'Africa/Lagos').fromNow()}</p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
      <div className='paginationCover'>
        <Pagination
          total={notificationsData.length}
          itemRender={itemRender}
          className='pagination'
          pageSize={pageSize}
          current={currentPage}
          onChange={setCurrentPage}
          showSizeChanger={false}
          showQuickJumper={false}
          showTotal={(total, range) =>
            `Showing ${range[0]}-${range[1]} items out of ${total} results found`
          }
        />
      </div>
    </div>
  )
}

export default Notifications;