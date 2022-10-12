import React, { Component } from 'react';
import { IUserCardData } from 'ts/interfaces';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import styles from './user-card.module.css';

interface IUserCardProps {
  data: IUserCardData;
}
interface IUserCardStates {
  imageUrl: string | null;
}

export default class UserCard extends Component<IUserCardProps, IUserCardStates> {
  constructor(props: IUserCardProps) {
    super(props);
    this.state = {
      imageUrl: null,
    };
  }

  componentDidMount() {
    const file = this.props.data.avatar;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const { result } = reader;
      if (typeof result === 'string' && result != 'data:') {
        this.setState({ imageUrl: result });
      }
    };
  }

  render() {
    const {
      name,
      surname,
      email,
      gender,
      country,
      birthday,
      delivery,
      zip,
      consent,
      installBrowsers,
      notifications,
    } = this.props.data;

    const { imageUrl } = this.state;

    return (
      <div className={styles.card}>
        <CardHeader
          imageUrl={imageUrl}
          name={name}
          surname={surname}
          gender={gender}
          email={email}
          country={country}
        />

        <CardBody
          birthday={birthday}
          zip={zip}
          delivery={delivery}
          consent={consent}
          installBrowsers={installBrowsers}
          notifications={notifications}
        />
      </div>
    );
  }
}
