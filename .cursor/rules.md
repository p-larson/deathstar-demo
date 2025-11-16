# Overview

This project is a React Native app built on Expo Router, Nativewind, Redux Toolkit Query, @rn-primitives, react-native-reusables, and Storybook.

The goal is to serve this app as both web and native, so all features and layouts must be responsively designed and leveraging platform specific modules and nativewind container breakpoints where appropriate.

## Theme

Keep @/lib/theme.ts, global.css, contants/Colors.ts, and tailwind.config.js in sync with each other.

## Components

Based on @rn-primitives and react-native-reusables, and located in components/ui/

## Expo

This is meant to be an Expo managed workflow, where we let Expo manage ios/ or android/ files
