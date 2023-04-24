import { useState, useMemo } from 'react';

export default function useRequestFilters(userRequests, setSelectedRequestId) {

  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('Any Status');

  const filterRequests = function() {
    if (category === 'All Categories' && status === 'Any Status') {
      return userRequests;
    }
    if (category !== 'All Categories' && status === 'Any Status') {
      return userRequests.filter(request => request.category === category);
    }
    if (category === 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.status === status);
    }
    if (category !== 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.category === category && request.status === status);
    }
  };

  const filteredRequests = useMemo(filterRequests, [category, status, userRequests]);

  // Build an array of the available categories
  const categoryOptions = ['All Categories'];
  for (const request of userRequests) {
    if (!categoryOptions.includes(request.category)) {
      categoryOptions.push(request.category);
    }
  }

  // Build an array of the available statuses
  const statusOptions = ['Any Status'];
  for (const request of userRequests) {
    if (!statusOptions.includes(request.status)) {
      statusOptions.push(request.status);
    }
  }

  // Create dropdown select element to filter by category
  const categoryFilter = categoryOptions.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  // Create dropdown select element to filter by status
  const statusFilter = statusOptions.map((status, index) => {
    return (
      <option key={index} value={status}>
        {status}
      </option>
    );
  });

  // Event Handlers
  const resetFilters = function() {
    setCategory('All Categories');
    setStatus('Any Status');
    setSelectedRequestId();
  };

  const handleCategoryChange = function(event) {
    setCategory(event.target.value);
  };

  const handleStatusChange = function(event) {
    setStatus(event.target.value);
  };


  return { category, status, filteredRequests, categoryFilter, statusFilter, resetFilters, handleCategoryChange, handleStatusChange };
}