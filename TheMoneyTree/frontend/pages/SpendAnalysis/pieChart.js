import React, { Component, useEffect, useState } from "react"
import { StyleSheet, ScrollView, Text, View  } from 'react-native';
import { useForm, Controller, useFormState } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import PieChart from "react-native-pie-chart";
import PropTypes from 'deprecated-react-native-prop-types';


export default class Chartpie extends Component {
  
    render() {
        const widthAndHeight = 250
        const sliceColor = [colors.purple.light, colors.pink.light, colors.pink.dark, colors.midnight.default, colors.pink.default]
        
        if (this.props.datacategories.length === 0) {
          return null;
        }
        
        return (
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={this.props.datacategories}
                  sliceColor={sliceColor}
                  coverRadius={0.60}
                  coverFill={sliceColor}
                />
              </View>
            </ScrollView>
          )
        }
      }



      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
        },
        title: {
          fontSize: 24,
          margin: 10,
        },
        
      })

      const colors = {
        purple: {
          default: '#805ad5',
          light: '#D6BCFA',
          dark: '#44337A',
        },
        midnight: {
          default: '#9866ea',
          light: '#58055a',
          dark: '#3c0764',
        },
        pink: {
          default: '#ea66cd',
          light: '#F687B3',
          dark: '#B83280',
        },
        fuchsia: {
          default: '#c026d3',
          light: '#f0abfc',
          dark: '#4a044e'
        },
      };
    

