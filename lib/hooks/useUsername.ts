import useSWR from 'swr';

export const useUsername = () => {
  const {
    data,
    error,
    mutate,
  } = useSWR<string>('/api/username', url => fetch(url).then(res => res.json()));

  return {
    username: data,
    setUsername: async (newUsername: string) => {
      await fetch('/api/username', {
        method: 'POST',
        body: JSON.stringify(newUsername),
      });
      mutate();
    },
    isLoading: !data && !error,
  };
};
