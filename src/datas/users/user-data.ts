import { db } from '@/db/prisma';
import { type TUserID, type TUserRead, type TUserWrite } from '@/types/general';

export const getUserData = async (id: TUserID): Promise<TUserRead | null> => {
  return db.users.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      firstname: true,
      lastname: true,
      status: true,
    },
  });
};

export const getAllUsersData = async (): Promise<TUserRead[] | null> => {
  return db.users.findMany({
    select: {
      id: true,
      email: true,
      firstname: true,
      lastname: true,
      status: true,
    },
  });
};

export const saveUserData = async (data: TUserWrite): Promise<TUserRead> => {
  return db.users.create({
    data: data,
    select: {
      id: true,
      email: true,
      firstname: true,
      lastname: true,
      status: true,
    },
  });
};

export const updateUserData = async (data: TUserWrite, id: TUserID): Promise<TUserRead> => {
  return db.users.update({
    where: {
      id,
    },
    data: data,
    select: {
      id: true,
      email: true,
      firstname: true,
      lastname: true,
      status: true,
    },
  });
};

export const deleteUserData = async (id: TUserID) => {
  return db.users.delete({
    where: {
      id,
    },
  });
};
