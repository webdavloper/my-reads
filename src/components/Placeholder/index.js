import './style.css'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default () =>
  <ul className="skeleton">
    <li><Skeleton width={136} height={183} /></li>
    <li><Skeleton width={136} height={183} /></li>
    <li><Skeleton width={136} height={183} /></li>
    <li><Skeleton width={136} height={183} /></li>
    <li><Skeleton width={136} height={183} /></li>
  </ul>
