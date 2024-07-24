import { INewItem } from '@/pages/dashboard/requests/brief/[details]';
import { IUser, LocationData } from '@/utilities/interface';
import React, { ReactElement } from 'react';

export interface UserFilterModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilter?: () => void;
}

export interface ModalIconProps {
  icon: ReactElement;
  type: 'red' | 'green';
}

export interface CreateAccountModalProps {
  isCreateAccountModalOpen: boolean;
  setIsCreateAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SearchServiceModalProps {
  isSearchServiceModalOpen: boolean;
  setIsSearchServiceModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  matchedService: boolean;
  setMatchedService: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal?: () => void;
  setServiceOptionsData?: React.Dispatch<React.SetStateAction<string>>;
  location?: LocationData;
  searchResults?: {
    serviceType: string;
    serviceId: string;
  };
  newItem: INewItem;
  setNewItem: React.Dispatch<React.SetStateAction<INewItem>>;
  setRecommendedData: React.Dispatch<React.SetStateAction<INewItem[]>>;
  setSearchValue?: React.Dispatch<React.SetStateAction<{}>>
}

export interface SearchModalProps {
  result: any; //correct this later with correct interface type
}

export interface SuccessModalProps {
  isSuccessModalOpen: boolean;
  setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EditAccountModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  editAccountType: string;
  userId: string;
}

export interface iSuccessModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  text: string;
  $width?: number;
}

export interface CreateServiceModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowServiceForm: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectOptionProps {
  value: string;
  title: string;
}

export interface AssignLocationManagerModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bookingType: string;
}
