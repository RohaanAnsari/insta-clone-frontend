import React, { useEffect, useState, useRef } from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import { Wrapper, Inputs, Result, User } from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserProfile } from '../../actions/user.actions';
import OutsideClickHandler from 'react-outside-click-handler';

const Searchbar = ({ placeholder, data, top }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useHistory();
  let ref = useRef();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const handleFilteredData = (event) => {
    let word = event.target.value;
    setWordEntered(word);
    const filtered = data.filter((value) => {
      return value.name.toLowerCase().includes(word.toLowerCase());
    });
    if (word === '') {
      setFilteredData([]);
    } else {
      setFilteredData(filtered);
    }
  };
  useEffect(() => {
    setFilteredData([]);
    setWordEntered('');
    console.log('Location.pathname =', location.location.pathname);
  }, [location.location.pathname]);

  useEffect(() => {
    let handler = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setFilteredData([]);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <Wrapper>
      <Inputs>
        <SearchRoundedIcon />
        <input
          type="search"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilteredData}
        />
      </Inputs>
      {filteredData.length !== 0 && (
        <div ref={ref}>
          <Result top={top}>
            {filteredData.slice(0, 10).map((value) => (
              <>
                <User
                  onClick={() => {
                    console.log(value._id);
                    dispatch(getUserProfile(value._id));
                    history.push(`/profile/${value._id}`);
                  }}
                >
                  <div
                    onClick={() => {
                      console.log(value._id);
                      dispatch(getUserProfile(value._id));
                      history.push(`/profile/${value._id}`);
                    }}
                  >
                    <Avatar src={value.profilePicture} alt="profile" />
                    <h4
                      onClick={() => {
                        console.log(value._id);
                        dispatch(getUserProfile(value._id));
                        history.push(`/profile/${value._id}`);
                      }}
                    >
                      {value.name}
                    </h4>
                  </div>
                </User>
              </>
            ))}
          </Result>
        </div>
      )}
    </Wrapper>
  );
};

export default Searchbar;
