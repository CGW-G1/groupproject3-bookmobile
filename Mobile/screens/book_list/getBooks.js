import * as React from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Avatar, List, Card, Title, Paragraph } from 'react-native-paper';
import styles from "../../style_constants/style-sheet";
import MyButton from "../../components/button";
import { useNavigation } from '@react-navigation/native';



// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
function GetBooks() {
    const navigation = useNavigation();

    return (
        <View style={styles.booksContainer} >
            <List.Section >
                <List.Item
                    left={props => (
                        <Image {...props}
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 1"
                    description="Describes item 1. Example of a very very long description."
                    onPress={() => navigation.navigate("Books", { screen: "Book Details" })}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Books", { screen: "Book Details" })}>
                    <Card mode='outlined'>
                        <Card.Cover source={{
                            uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                        }} />
                        <Card.Title title="Abandoned Ship" />
                        <Card.Content>
                            <Paragraph>
                                The Abandoned Ship is a wrecked ship located on Route 108
                            </Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <List.Item
                    left={() => (
                        <Image
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 2"
                    description="Describes item 2. Example of a very very long description."
                />
                <MyButton
                    text="Book Details"
                    buttonAction={
                        () => {
                            navigation.navigate("Books", { screen: 'Book Details' });
                        }
                    }
                />
                <List.Item
                    left={() => (
                        <Image
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 2"
                    description="Describes item 2. Example of a very very long description."
                />
                <List.Item
                    left={() => (
                        <Image
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 2"
                    description="Describes item 2. Example of a very very long description."
                />
                <List.Item
                    left={() => (
                        <Image
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 2"
                    description="Describes item 2. Example of a very very long description."
                />
                <List.Item
                    left={() => (
                        <Image
                            style={{ width: 66, height: 95 }}
                            source={{
                                uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-fall-2019/large/bbcdune.jpg?1384968217',
                            }}
                        />
                    )}
                    title="List item 2"
                    description="Describes item 2. Example of a very very long description."
                />
            </List.Section>
        </View>
    )
}





export default GetBooks;