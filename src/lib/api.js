import { useEffect } from 'react'
import useSWR from 'swr'

const url = import.meta.env.SNOWPACK_PUBLIC_API_URL
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useAbout() {
  const { data, error } = useSWR(`${url}/aboutus`, fetcher)

  return {
    about: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useServices() {
  const { data, error } = useSWR(`${url}/services`, fetcher)

  return {
    services: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useGallery() {
  const { data, error } = useSWR(`${url}/galleryitems`, fetcher)

  return {
    gallery: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useReviews() {
  const { data, error } = useSWR(`${url}/reviews`, fetcher)

  return {
    reviews: data,
    isLoading: !error && !data,
    isError: error,
  }
}
